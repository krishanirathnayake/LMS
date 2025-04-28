import * as React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { CircularProgress } from '@mui/material';

const leaveData = [
  { type: 'Annual Leave', used: 4, total: 14, color: '#D9534F' },
  { type: 'Casual Leave', used: 2, total: 7, color: '#0275D8' },
  { type: 'Sick Leave', used: 3, total: 7, color: '#F0AD4E' },
];

const LeaveSummary = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>

      </Typography>
      <Grid container spacing={2} justifyContent="space-between">
        {leaveData.map((leave, index) => {
          const percentage = (leave.used / leave.total) * 100;
          return (
            <Grid item xs={12} sm={4} md={4} lg={4} key={index}>
              <Paper
                sx={{
                  padding: 3,
               
                  backgroundColor: '#2a3042',
                  color: 'white',
                  borderRadius: '12px',
                  border: '1px solid white',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  {leave.type}
                </Typography>
                <Box
                  sx={{ display: 'flex', justifyContent: 'center', position: 'relative', margin: '20px 0' }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={100}
                    size={80}
                    sx={{ color: '#e0e0e0', position: 'absolute' }}
                  />
                  <CircularProgress
                    variant="determinate"
                    value={percentage}
                    size={80}
                    sx={{ color: leave.color }}
                  />
                  <Typography
                    sx={{
                      position: 'absolute',
                      fontWeight: 'bold',
                      color: 'white',
                      top: '30%',
                    }}
                  >
                    {leave.total - leave.used}/{leave.total}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Typography variant="body2">Available - {leave.total} <Typography variant="body2" sx={{ marginTop: 1 }}>
                  Remaining - {leave.total - leave.used}
                </Typography></Typography>
                  <Typography variant="body2">Used - {leave.used}</Typography>
                </Box>
               
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
export default LeaveSummary;