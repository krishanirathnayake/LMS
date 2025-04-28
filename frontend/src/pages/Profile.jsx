import * as React from 'react';
import { Box, Grid, Paper, Button, Typography, Divider } from '@mui/material';
import EditIcon from '@rsuite/icons/Edit';
import profile from '../assests/images/pro-pic.jpg';
import LeaveSummary from '../components/LeaveSummary';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => { 
    navigate('/dashboard/edit-profile'); 
  };

  return (<> <Box className="page-container">
      <Grid container justifyContent="center" spacing={2}>
        
        <Grid item xs={12}>
          <Typography className="page-title" variant="h4" color="white" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '1.5rem' } }}>
            Profile
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={12}>
          <Paper
            elevation={3}
            className="page-card"
            sx={{
              padding: 4,
              borderRadius: "12px",
              backgroundColor: '#2a3042',
              color: 'white',
              height: "auto",
            }}
          >
            <Grid container spacing={2} alignItems="center">
              
          
              <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                  src={profile}
                  alt="Profile"
                  className="profile-img"
                />
                <Typography variant="h6" sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' }, textAlign: 'center' }}>Krishani Yashodha</Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'center' }}>UI/UX Engineer</Typography>
              </Grid>
              
              <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 1, backgroundColor: 'white', marginX: 2 }} />
              
            
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box className="page-details" sx={{ fontSize: { xs: '0.5rem', sm: '1rem' } }}>
                      <strong>Name</strong> <span style={{ marginLeft: '75px' }}>Krishani Yashodha Rathnayake</span>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="profile-details" sx={{ fontSize: { xs: '0.5rem', sm: '1rem' } }}>
                      <strong>Gender</strong> <span style={{ marginLeft: '65px' }}>Female</span>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="profile-details" sx={{ fontSize: { xs: '0.5rem', sm: '1rem' } }}>
                      <strong>Address</strong> <span style={{ marginLeft: '60px' }}>4A, Hilda Lane, Dehiwala</span>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="profile-details" sx={{ fontSize: { xs: '0.5rem', sm: '1rem' } }}>
                      <strong>Date of Birth</strong><span style={{ marginLeft: '30px' }}>1997 - Oct - 19</span>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="profile-details" sx={{ fontSize: { xs: '0.5rem', sm: '1rem' } }}>
                      <strong>Designation</strong><span style={{ marginLeft: '35px' }}>UI/UX Engineer</span>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="profile-details" sx={{ fontSize: { xs: '0.5rem', sm: '1rem' } }}>
                      <strong>Email Address</strong><span style={{ marginLeft: '20px' }}>krishanthi@tetris.lk</span>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="profile-details" sx={{ fontSize: { xs: '0.5rem', sm: '1rem' } }}>
                      <strong>Joined Date</strong><span style={{ marginLeft: '35px' }}>2022 - Aug - 01</span>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 ,mr:5}}>
              <Button
                className="edit-button"
                sx={{ backgroundColor: '#65737E',textTransform: 'none', }}
                variant="contained"
                size="large"
                onClick={handleButtonClick}
              >
                <EditIcon /> Edit Profile
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12}>
          <Paper
    elevation={3}
    className="page-card add-employee-form"
    sx={{
      padding: 4,
      borderRadius: "12px",
      minHeight: '350px',
      color: 'white',
      height: "auto",
      backgroundColor: '#2a3042',
      marginTop: 2
    }}
  >
 
<LeaveSummary/>
   
  </Paper>
  </Grid>
    </Box>
    <Box> </Box> </>
   
  );
};

export default Profile;
