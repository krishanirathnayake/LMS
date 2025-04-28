import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Typography,Grid } from '@mui/material';
import Logo from '../assests/images/litmus-logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const ResetPasswordrequest = () => {
  
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    // username : user_admin
    // password : admin_password
  
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
  
    


    return(
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        sx={{ backgroundColor: '#424252', position: 'relative' }}
      >
        <Card
          sx={{
            borderRadius: '4%',
            maxWidth: 400,
            padding: 4,
            backgroundColor: '#121224',
            color: 'white',
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
              onSubmit={handleSubmit}
              sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 3 }}
              noValidate
              autoComplete="off"
            >
              <TextField
                label=""
                placeholder='Email Address'
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
                fullWidth
                required
                InputProps={{
                  sx: {
                    height: '50px',
                    backgroundColor: 'white',
                    color: 'black',
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                }}
              />
  
  
                {errorMessage && (
                  <Typography color="error" variant='body2' >
                    {errorMessage}
                  </Typography>
                )}
  
    
              <CardActions sx={{ justifyContent: 'center', padding: '0' }}>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: '#65737E',
                    width: '100%',
                    maxWidth: '100%',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#100f24',
                    },
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
        <Link  className='forget-link'
          to="/login" 
        >
          Login
        </Link>
      </Grid>
    </Grid>
                
            </Box>
  
          </CardContent>
  
        </Card>
      </Box>
    );
};


export default ResetPasswordrequest;
