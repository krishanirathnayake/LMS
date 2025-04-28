import React, { useState } from 'react';
import {Card,CardActions,CardContent,CardMedia} from '@mui/material';
import { Typography,Grid } from '@mui/material';
import {TextField,Box,Button} from '@mui/material';
import Logo from '../assests/images/litmus-logo.png'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const ForgetPassword = () => {
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
 

  
    const handleSubmit = async (e) => {
      e.preventDefault(); 
      setErrorMessage('');
  
      try {
        const response = await axios.post('http://localhost:3000/login', { username }); 
        if (response.data.redirectTo) {
          navigate(response.data.redirectTo); 
        }
      } catch (error) {
        console.error(error.response?.data?.message || 'Login failed');
        setErrorMessage(error.response?.data?.message || 'Unknown error');
      }
    };
 

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="110vh"
      sx={{ backgroundColor:  '#424252',  position: 'relative' }}
    
    >
     
      
      <Card
      className='login-card'
        sx={{
          borderRadius: '4%', 
          maxWidth: 400,
          padding: 4,
          backgroundColor:  '#121224', 
          color:  'white', 
          boxShadow: 3
        }}
      >
       <Box display="flex" justifyContent="center" alignItems="center" mb={3} mr={2}>
          <CardMedia
            component="img"
            image={Logo}
            title="Login Image"
            sx={{
              width: '32%',  
              height: 'auto', 
              maxHeight: '150px', 
              objectFit: 'contain',
            }}
          />
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h6" component="div" ml={7} mt={3} style={{fontWeight:'bold'}}>
            LITMUS MANAGER
          </Typography>
          <Typography gutterBottom variant="h6" component="div" mt={3} ml={11} style={{fontSize:"17px",fontWeight:"bold"}} >
          Passowrd Reset
          </Typography>
          <Grid 
      container 
      direction="column" 
      alignItems="center" 
      justifyContent="center" 
      mt={3} 
      style={{ fontSize: '9px' }}
    >
      <Grid item>
        <Typography variant="body2" gutterBottom>
          Provide the email address associated
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2"  gutterBottom>
          with your account to recover your
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" s gutterBottom>
          password
        </Typography>
      </Grid>
    </Grid>
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
         
               <TextField label="" placeholder='Email Address' variant="outlined" fullWidth required   onChange={(e) => setUsername(e.target.value)}  InputProps={{
    
    sx: {
      height: '50px',
      backgroundColor:  'white', 
      color:  'black', 
    },
  }}
  InputLabelProps={{
    sx: {
      color: 'black', 
    },
  }}
  sx={{
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor:  'white', 
      },
      '&:hover fieldset': {
        borderColor: 'white', 
      },
      '&.Mui-focused fieldset': {
        borderColor:  'white', 
      },
    },
  }}
                />
             {errorMessage && (
                           <Typography color="error" variant='body2' >
                             {errorMessage}
                           </Typography>
                         )}

          </Box>
          
        
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
       
          <Button className='login-button'
  sx={{
    backgroundColor: '	#65737E',
    
    textTransform: 'none',
    
  }}
  variant="contained"
  size="large"
  component={Link}  
  to="/new-password"  
  
  type="submit"
>
 Reset Password
</Button>

        </CardActions>
        <Grid 
      container 
      justifyContent="center" 
      alignItems="center" 
     
    >
      <Grid item>
        <Link  className='forget-link'
          to="/login" 
        >
          Login
        </Link>
      </Grid>
    </Grid>
      </Card>
    </Box>
  );
};

export default ForgetPassword;

