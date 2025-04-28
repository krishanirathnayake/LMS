import * as React from 'react';
import { Box, Grid, Paper, Button, Typography } from '@mui/material';
import LeaveSummary from '../components/LeaveSummary';
import LeaveHistory from '../components/LeaveHistory';

const ApplyLeave = () => {
  const [startDate, setStartDate] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [endTime, setEndTime] = React.useState('');
  const [leaveType, setLeaveType] = React.useState('');
  const [reason, setReason] = React.useState('');

 
  

  return (

      <Box className="page-container">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12}>
   <Grid item>
          <Typography variant="h5" color="white">Leave Management</Typography>
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
      marginBottom: 2
    }}
  >
    <Grid>
      <Typography className="page-title" variant="h6" color="white" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1rem' }, marginBottom: 2,color:'white' }}>
    Your Leave Summary
      </Typography>
    </Grid>
<LeaveSummary/>
   
  </Paper>
  <Paper
    elevation={3}
    className="page-card add-employee-form"
    sx={{
      padding: 4,
      borderRadius: "12px",
      minHeight: '500px',
      color: 'white',
      height: "auto",
      backgroundColor: '#2a3042',
    }}
  >
    <Grid>
      <Typography className="page-title" variant="h6" color="white" sx={{ fontSize: { xs: '1rem', sm: '1.2rem', md: '1rem' }, marginBottom: 2,color:'white' }}>
      New Leave Application
      </Typography>
    </Grid>

    <Grid container spacing={2} >
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Start Date</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>Start Time</label>
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>End Date</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} mt={3}>
        <div className="input-field">
          <label>End Time</label>
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
      </Grid>
      <Grid item xs={12} sm={12} mt={3}>
        <div className="input-field">
          <label>Leave Type</label>
          <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)}>
            <option value="Annual">Annual</option>
            <option value="Halfday">Half Day</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} mt={3}>
  <div className="input-field">
    <label for="reason">Reason</label>
    <textarea 
      id="reason"
      value={reason} 
      onChange={(e) => setReason(e.target.value)}
      rows="5"
      style={{
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        fontFamily: 'inherit',
        fontSize: 'inherit'
      }}
    ></textarea>
  </div>
</Grid>
      
     
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button className="edit-button" variant="contained" sx={{ backgroundColor: '#65737E', textTransform: 'none' }}>
          Submit Application
          </Button>
      </Grid>
    </Grid>
  </Paper>
 <LeaveHistory/>

</Grid>
 

        </Grid>
      </Box>

  );
};

export default ApplyLeave;