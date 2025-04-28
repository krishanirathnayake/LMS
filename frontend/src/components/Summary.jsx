import React from 'react';
import { Card, Typography, Box, Grid, Avatar } from '@mui/material';


const Summary = () => {

 const [day, setDay] = React.useState('Today');

 

  return (
    <Card
      sx={{
        borderRadius: '12px',
        backgroundColor: '#121224', 
        color: 'white',
        padding: 2,
        boxShadow: 3,
        minWidth: 250,
        height: '95%',
        overflowY: 'auto',
        margin: 3,
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center" marginBottom={2} sx={{borderBottom: '1px solid gray',padding:1}}>
        <Grid item>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Summary
          </Typography>
        </Grid>
   
        <Grid item xs={12} sm={6}  mt={3}>
                <div className="input-field ">
                  <select value={day} onChange={(e) => setDay(e.target.value)}>
                    <option value="Male">Today</option>
                    <option value="Female">Today</option>
                    <option value="Other">Today</option>
                  </select>
                </div>
              </Grid>
      </Grid>

      <SummaryCard
  title={
    <Typography variant="p" sx={{ color: "red",fontWeight:"bold" }}>
      On Leave - 2
    </Typography>
  }
 
>
        <SummaryItem
          name="Rashod Chamikara"
          date="4th March"
          status="On Leave"
          avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="red"
        />
        <SummaryItem
          name="Amrah Liyakanth"
          date="4th March"
          status="On Leave"
   avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="red"
        />
      </SummaryCard>

      <SummaryCard title={
    <Typography variant="p" sx={{ fontWeight:"bold" }}>
  Working From Home
    </Typography>
  }>
        <SummaryItem
          name="Krishani Yashodha"
          date="4th March"
          status="On Leave"
      avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="blue"
        />
        <SummaryItem
          name="Nishani Kulathunga"
          date="4th March"
          status="On Leave"
   avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="blue"
        />
      </SummaryCard>

      <SummaryCard title={
    <Typography variant="p" sx={{ color: "green",fontWeight:"bold" }}>
Celebrations This Month
    </Typography>
  }>
        <SummaryItem
          name="Nishani Kulathunga"
          date="4th March"
          status="Birthday"
   avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="blue"
        />
        <SummaryItem
          name="Shenol De Silva"
          date="20th March"
          status="2nd Anniversary"
   avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="blue"
        />
          <SummaryItem
          name="Shenol De Silva"
          date="20th March"
          status="2nd Anniversary"
   avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="blue"
        />
          <SummaryItem
          name="Shenol De Silva"
          date="20th March"
          status="2nd Anniversary"
   avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="blue"
        />
          <SummaryItem
          name="Shenol De Silva"
          date="20th March"
          status="2nd Anniversary"
   avatarSrc="https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png"
          statusColor="blue"
        />
      </SummaryCard>
    </Card>
  );
};

const SummaryCard = ({ title, children }) => (
  <Box
    sx={{
      backgroundColor: '#2a3042',
      padding: 2,
      borderRadius: '7px',
      marginBottom: 5,
      color: 'white',
      border:"1px solid gray"
      
    }}
  >
    <Typography variant="subtitle1" sx={{ color: '#64b5f6', marginBottom: 1,fontSize:"15px",borderBottom: '1px solid gray' }}>
      {title}
    </Typography>
    {children}
  </Box>
);

const SummaryItem = ({ name, date, status, avatarSrc, statusColor }) => (
  <Grid container alignItems="center" spacing={2} sx={{ marginBottom: 1 }}>
    <Grid item>
      <Avatar src={avatarSrc} />
    </Grid>
    <Grid item xs>
      <Typography variant="body1" sx={{ fontSize:"15px" }}>{name}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
  <Typography variant="body2" sx={{ color: 'gray', fontSize: "12px" }}>
    {date}
  </Typography>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <Box sx={{ 
      width: '6px', 
      height: '6px', 
      borderRadius: '50%', 
      backgroundColor: statusColor, 
      mr: '4px' 
    }} />
    <Typography variant="body2" sx={{ fontSize: "12px" }}>
      {status}
    </Typography>
  </Box>
</Box>
    </Grid>

  </Grid>
);

export default Summary;