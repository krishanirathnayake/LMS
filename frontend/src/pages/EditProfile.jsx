import React, { useState } from 'react';
import { Box, Grid, Paper, Button, Typography, Avatar, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import { ArrowBack } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom'; 
import dayjs from 'dayjs';
import bannerImage from '../assests/images/bg-image.jpg';
import defaultProfileImage from '../assests/images/pro-pic.jpg';

const EditProfile = () => {
  const [firstName, setFirstName] = useState('Krishani');
  const [lastName, setLastName] = useState('Yashoda');
  const [email, setEmail] = useState('krishanthi@tetris.lk');
  const [phone, setPhone] = useState('1111111111');
  const [gender, setGender] = useState('female');
  const [designation, setDesignation] = useState('UI/UX Engineer');
  const [birthDate, setBirthDate] = useState(dayjs('1997-10-19'));
  const [joinedDate, setJoinedDate] = useState(dayjs('2022-08-01'));
  const [profilePicture, setProfilePicture] = useState(defaultProfileImage);
  const [bannerPicture, setBannerPicture] = useState(bannerImage);

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBannerPictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return ( 
  <Grid item xs={12} md={12} >
            <Paper
              elevation={3}
              className="page-card"
              sx={{
                padding: 4,
                borderRadius: "12px",
                backgroundColor: '#121224',
                color: 'white',
                height: "auto",
                marginTop:"25px"
              }}
            >
                <Grid container alignItems="center" spacing={2}>
  <Grid item>
    <IconButton component={Link} to="/dashboard/profile" sx={{ color: 'white' }}>
      <ArrowBack />
    </IconButton>
  </Grid>
  <Grid item xs>
    <Typography className="page-title" variant="h4" color="white" sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '1.5rem' } }}>
      Edit Profile
    </Typography>
  </Grid>

  <Button    component={Link} 
               to="/dashboard/apply-leave"  className="edit-button" variant="contained" startIcon={<AddIcon />} sx={{ width:"210px",backgroundColor: '#65737E', textTransform: 'none' }}>
       Apply For Leave
          </Button>
</Grid>
    <Box className=" edit-profile-container">
      
      <Box
        sx={{
          backgroundImage: `url(${bannerPicture})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 150,
          marginBottom: 2,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          borderRadius:"5px"
        
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: -50,
            left: 20,
          }}
        >
          <IconButton color="primary" aria-label="upload profile picture" component="label">
            <input hidden accept="image/*" type="file" onChange={handleProfilePictureChange} />
            <Avatar
              src={profilePicture}
              sx={{ width: 100, height: 100, border: '2px solid white' }}
            />
            <PhotoCamera sx={{ position: 'absolute', bottom: 0, right: 0, color: 'white' }} />
          </IconButton>
          
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 10,      
            right: 20,      
          }}
        >
          
          <IconButton color="primary" aria-label="upload banner picture" component="label">
            <input hidden accept="image/*" type="file" onChange={handleBannerPictureChange} />
            <PhotoCamera sx={{ color: 'white' }} />
          </IconButton>
          
        </Box>
        
      </Box>
      <Grid container justifyContent="center" spacing={2} >
      <Grid item xs={12} >
        
          <Grid item style={{ marginTop: "35px", marginLeft: "20px" }}>
            <Typography variant="body1" color="white" style={{ fontWeight: 'normal' }}>
              Krishani Yashoda
            </Typography>
          </Grid>
          
          <Grid item style={{  marginLeft: "28px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Typography variant="body2" color="white" style={{ fontWeight: 'normal' }}>
    UI/UX Engineer
  </Typography>
  <Button
    className="edit-button"
    variant="contained"
    sx={{ backgroundColor: '#65737E', textTransform: 'none' ,width:"210px"}}
  >
    Save Profile
  </Button>
</Grid>
          
        </Grid>

        <Grid item xs={12} md={12}>
          <Paper
            elevation={3}
            className="page-card add-employee-form"
            sx={{
              padding: 4,
              borderRadius: '12px',
              minHeight: '600px',
              color: 'white',
              height: 'auto',
              backgroundColor: 'rgba(42, 48, 66, 0.8)',
            }}
          >
            

   
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
             <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
           </div>
         </Grid>
         <Grid item xs={12} sm={6} mt={3}>
           <div className="input-field">
             <label>Joined Date</label>
             <input type="date" value={joinedDate} onChange={(e) => setJoinedDate(e.target.value)} />
           </div>
         </Grid>
        

       </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
    </Paper>
    </Grid>

  );
};

export default EditProfile;