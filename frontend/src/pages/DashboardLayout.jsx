import * as React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';


const DashboardLayout = () => {


 
  

  return (

      <Box className="page-container">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
   <Grid item>
          <Typography variant="h5" color="white">Dashboard</Typography>
        </Grid>
          </Grid>

         
          <Grid item xs={12} md={12}>
          <Paper
    elevation={3}
    className="page-card add-employee-form"
    sx={{
      padding: 4,
      borderRadius: "12px",
      minHeight: '870px',
      color: 'white',
      height: "auto",
      backgroundColor: '#2a3042',
      marginBottom: 2
    }}
  >
   
   
  </Paper>
  
</Grid>
        </Grid>
      </Box>

  );
};

export default DashboardLayout;