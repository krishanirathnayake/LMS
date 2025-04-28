import React, { useState } from 'react';
import {Card,CardActions,CardContent,CardMedia} from '@mui/material';
import { Typography,Grid } from '@mui/material';
import {TextField,Box,Button} from '@mui/material';
import Logo from '../assests/images/litmus-logo.png'; 
import { Link } from 'react-router-dom';





const AddNewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
 

  const handleClickShowPassword = () => setShowPassword((show) => !show);

 

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="110vh"
      sx={{ backgroundColor:  '#424252',  position: 'relative' }}
      // sx={{ backgroundColor: isDarkTheme ? '#424252' : '#fff', position: 'relative' }}
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
     
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}
            noValidate
            autoComplete="off"
          >
         
               <TextField label="" placeholder='New Password' variant="outlined" fullWidth required   InputProps={{
    
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
         
         <TextField label="" placeholder='Confirm Password' variant="outlined" fullWidth required   InputProps={{
    
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
        <Link 
          to="/login" 
          style={{fontWeight:"bold", color: "#fff", fontSize: "12px", margin: "5px" }}
        >
          Login
        </Link>
      </Grid>
    </Grid>
      </Card>
    </Box>
  );
};

export default AddNewPassword;

