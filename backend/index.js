

require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();


app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true 
}));
app.use(bodyParser.json());
app.use(cookieParser()); 


app.get('/auth/check', (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ isAuthenticated: false, message: 'No token found' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ isAuthenticated: false, message: 'Invalid token' });
    }

  
    res.status(200).json({
      isAuthenticated: true,
      user: {
        id: decoded.id,
        email: decoded.email
      }
    });
  });
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1);
  }
  console.log('Connected to database');
});




const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';


function verifyToken(req, res, next) {
  const token = req.cookies.accessToken; 

  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }

    req.user = user; 
    next();
  });
}

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }

  const query = 'SELECT * FROM employees WHERE email = ?';

  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({
        success: false,
        message: 'Database error'
      });
    }

    if (results.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const user = results[0];

    if (!user.password) {
      return res.status(401).json({
        success: false,
        message: 'Account not setup for login'
      });
    }

    try {
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          success: false,
          message: 'Invalid email or password'
        });
      }

      const accessToken = jwt.sign(
        { id: user.employee_id, email: user.email },
        SECRET_KEY,
        { expiresIn: '1h' }
      );

      const refreshToken = jwt.sign(
        { id: user.employee_id, email: user.email },
        SECRET_KEY,
        { expiresIn: '7d' } 
      );

   
      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 3600000 
      });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 604800000 
      });

      return res.status(200).json({
        success: true,
        message: 'Login successful',
        redirectTo: '/dashboard',
        user: {
          id: user.employee_id,
          name: `${user.first_name} ${user.last_name}`,
          email: user.email,
          role: user.designation
        }
      });
    } catch (err) {
      console.error('Authentication error:', err);
      return res.status(500).json({
        success: false,
        message: 'Authentication failed'
      });
    }
  });
});


app.post('/refresh-token', (req, res) => {
  const refreshToken = req.cookies.refreshToken; 

  if (!refreshToken) {
    return res.status(401).json({ message: 'No refresh token provided' });
  }

  jwt.verify(refreshToken, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    const newAccessToken = jwt.sign(
      { id: user.id, email: user.email },
      SECRET_KEY,
      { expiresIn: '1h' } // Set expiry time for the new access token
    );

    // Set the new access token in the cookie
    res.cookie('accessToken', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      maxAge: 3600000 // 1 hour expiry for the new access token
    });

    res.status(200).json({ message: 'Token refreshed successfully' });
  });
});


app.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: `Welcome, ${req.user.email}! This is a protected route.` });
});


app.get('/all-employees', (req, res) => {
  const sql = "SELECT * from employees";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    return res.status(200).json(data);
  });
});


app.post('/api/employees', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, gender, designation, 
            birthDate, joinedDate, company, role } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'First name, last name, and email are required' });
    }

    const defaultPassword = await bcrypt.hash('tempPassword123', 10);
    const status = 'active';

    const sql = `
      INSERT INTO employees 
        (first_name, last_name, email, phone, gender, designation, 
         birth_date, joined_date, company, role, password, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      firstName, 
      lastName, 
      email, 
      phone, 
      gender, 
      designation,
      birthDate, 
      joinedDate, 
      company,
      role,
      defaultPassword,
      status
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Database error:', err);
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ error: 'Email already exists' });
        }
        return res.status(500).json({ error: 'Database operation failed' });
      }

      res.status(201).json({
        success: true,
        employeeId: result.insertId,
        message: 'Employee created successfully'
      });
    });

  } catch (error) {
    console.error('Error creating employee:', error);
    res.status(500).json({ 
      error: 'Failed to create employee',
      details: error.message 
    });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
