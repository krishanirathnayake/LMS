import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Box, Card, CardContent, CardMedia, CardActions, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Logo from '../assests/images/litmus-logo.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');  

    try {
      const response = await axios.post(
        'http://localhost:5000/login',
        { email, password },
        { withCredentials: true }
      );

      if (response.data.redirectTo) {
        console.log('Login successful, redirecting to:', response.data.redirectTo);
        navigate(response.data.redirectTo);  
      } else {
        setErrorMessage('No redirect path provided');  
      }
    } catch (error) {
      const message = error.response?.data?.message || 'Unknown error';
      console.error('Login failed:', message);
      setErrorMessage(message);  
    }
  };


  
  useEffect(() => {
    fetch("http://localhost:5000/auth/check", {
      method: "GET",
      credentials: "include",  
    })
      .then(res => res.json())
      .then(data => {
        if (data.isAuthenticated) {
          setUser(data.user);  
        } else {
          setUser(null);  
        }
      })
      .catch(err => {
        console.error("Error:", err);
        setErrorMessage("Unable to verify authentication, please try again.");
      })
      .finally(() => setIsLoading(false));  
  }, []);
  useEffect(() => {
    if (user) {
      navigate('/dashboard'); 
    }
  }, [user, navigate]); 

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" sx={{ backgroundColor: '#424252' }}>
      <Card sx={{ borderRadius: '4%', padding: 4, backgroundColor: '#121224', color: 'white', boxShadow: 3 }}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
          <CardMedia component="img" image={Logo} title="Login Image" sx={{ width: '32%', height: 'auto', objectFit: 'contain' }} />
        </Box>
        <CardContent>
          <Typography variant="h6" ml={5} mt={3} sx={{ fontWeight: 'bold' }}>LITMUS MANAGER</Typography>
          <Typography variant="body2" mt={3} ml={1} sx={{ fontSize: "15px" }}>Enter your email and password to login</Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}>
            <TextField placeholder='User Name' onChange={(e) => setEmail(e.target.value)} fullWidth required sx={{ backgroundColor: 'white' ,borderRadius:"8px"}} />
            <TextField 
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ backgroundColor: 'white',borderRadius:"8px" }}
            />
            {errorMessage && <Typography color="error">{errorMessage}</Typography>}
            <Link to="/resetpasswordrequest" style={{ color: "#ffb615", fontSize: "12px" }}> * Forgot Password?</Link>
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button type="submit"  sx={{
                    backgroundColor: '#65737E',
                    width: '100%',
                    maxWidth: '100%',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#100f24',
                    },
                  }} variant="contained" size="large">
                Login
              </Button>
            </CardActions>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
