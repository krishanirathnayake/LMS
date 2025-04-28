import React from 'react';
import { Card, Typography, Box, Divider } from '@mui/material';

const holidays = [
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
  { date: '11 Jul 2025', day: 'Friday', name: 'Poya Day' },
];

const Holidays = () => {
  return (
    <Card
      sx={{
        borderRadius: '12px',
        backgroundColor: '#121224',
        color: 'white',
        padding: 2,
        boxShadow: 3,
        minWidth: 250,  
        // maxWidth: 1000,
        height: '95%', 
        overflowY: 'auto',
     
        margin:3
      }}
    >
   
      <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
        Upcoming Holidays
      </Typography>


      {holidays.map((holiday, index) => (
        <Box key={index} sx={{ paddingY: 1 }}> <Typography variant="body2" sx={{ float: 'right', fontWeight: 'bold' }}>
            {holiday.name}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            {holiday.date}
          </Typography>
          
          <Typography variant="body2" color="gray">
            {holiday.day}
          </Typography>
         
          {index !== holidays.length - 1 && <Divider sx={{ backgroundColor: 'gray', marginY: 1 }} />}
        </Box>
      ))}
    </Card>
  );
};

export default Holidays;
