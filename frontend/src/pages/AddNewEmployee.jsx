import * as React from 'react';
import { Box, Grid, Paper, Button, Typography } from '@mui/material';
import dayjs from 'dayjs';
import axios from 'axios'
import { Snackbar, Alert } from '@mui/material';

const AddNewEmployee = () => {

  
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [designation, setDesignation] = React.useState('');
  const [birthDate, setBirthDate] = React.useState(dayjs());
  const [joinedDate, setJoinedDate] = React.useState(dayjs());
  const [company, setCompany] = React.useState('Tetris (Pvt) Ltd');
  const [sendLogin, setSendLogin] = React.useState(true);
  const[role, setRole] = React.useState('');

  const [notification, setNotification] = React.useState({
    open: false,
    message: '',
    severity: 'success' // 'success', 'error', 'warning', 'info'
  });

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  function handleSubmit(event) {
    event.preventDefault();
    
    const formattedData = {
      firstName,
      lastName,
      email,
      phone,
      gender,
      designation,
      birthDate: birthDate.format('YYYY-MM-DD'),
      joinedDate: joinedDate.format('YYYY-MM-DD'),
      company,
      role
    };
  
    console.log('Submitting:', formattedData); // Log the data being sent
  
    axios.post('http://localhost:5000/api/employees', formattedData)
      .then(res => {
        setNotification({
          open: true,
          message: 'Employee added successfully!',
          severity: 'success'
        });

        // Reset form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setGender('');
        setDesignation('');
        setBirthDate(dayjs());
        setJoinedDate(dayjs());
        setRole('');
        
      })
      .catch(err => {
        setNotification({
          open: true,
          message: err.response?.data?.error || 'Failed to add employee',
          severity: 'error'
        });
      });
  }




  return (

      <Box className="page-container">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
            <Grid item>
              <Typography variant="h5" color="white">Add New Employee</Typography>
            </Grid>
          </Grid>

         
          <Grid item xs={12} md={12}>
            <Paper elevation={3}  className="page-card add-employee-form"
              sx={{
                padding: 4,
                borderRadius: "12px",
                minHeight: '880px',
                color: 'white',
                height: "auto",
                backgroundColor: '#2a3042',
              
              }}
            >
          <Grid>
          <Typography className="page-title" variant="h6" color="white" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1rem' }, marginBottom: 2,color:'white' }}>
            Add the new employee details below.
          </Typography>
        </Grid>

    <Grid container spacing={2} >
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>First Name</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Last Name</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Phone Number</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Designation</label>
          <input type="text" value={designation} onChange={(e) => setDesignation(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>BirthDay</label>
          <input type="date" value={birthDate.format('YYYY-MM-DD')}  onChange={(e) => setBirthDate(dayjs(e.target.value))} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Joined Date</label>
          <input type="date" value={joinedDate.format('YYYY-MM-DD')}  onChange={(e) => setJoinedDate(dayjs(e.target.value))} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Company</label>
          <select value={company} onChange={(e) => setCompany(e.target.value)}>
            <option value="Tetris (Pvt) Ltd">Tetris (Pvt) Ltd</option>
            <option value="Litmus (Pvt) Ltd">Litmus (Pvt) Ltd</option>
            <option value="Magnus (Pvt) Ltd">Magnus (Pvt) Ltd</option>
          </select>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Employee Type</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Employee">Employee</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
          </select>
        </div>
      </Grid>
      <Grid item xs={12}>
    <label className="custom-checkbox-label">
        <input 
            type="checkbox" 
            checked={sendLogin} 
            onChange={(e) => setSendLogin(e.target.checked)} 
            className="hidden-checkbox" 
        />
        <div className="custom-checkbox"></div>
        Create the login for this employee and send the login link to employee's email.
    </label>
</Grid>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={handleSubmit} className="edit-button" variant="contained" sx={{ backgroundColor: '#65737E', textTransform: 'none' }}>
           Save Details
          </Button>
      </Grid>
    </Grid>
  </Paper>
</Grid>
        </Grid>

        <Snackbar
      open={notification.open}
      autoHideDuration={6000}
      onClose={handleCloseNotification}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert 
        onClose={handleCloseNotification} 
        severity={notification.severity}
        sx={{ width: '100%' }}
      >
        {notification.message}
      </Alert>
    </Snackbar>

    
      </Box>


  );
};

export default AddNewEmployee;