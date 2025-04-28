import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Grid, Paper, useTheme, useMediaQuery, IconButton, Badge } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MessageIcon from '@mui/icons-material/Message';
import SideNav from '../components/SideNav.jsx';
import Logo from '../assests/images/litmus-logo.png';
import profile from '../assests/images/pro-pic.jpg';
import Holidays from '../components/Holidays.jsx';
import Summary from '../components/Summary.jsx';
import '../App.css';

function Dashboard() {
  const theme = useTheme();
  const location = useLocation();
  

  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 
  const isTablet = useMediaQuery('(min-width:600px) and (max-width:1199px)'); 
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg')); 
  const isIpad = useMediaQuery('(min-width:768px) and (max-width:1024px)');


  const [hideSidebarAndLogo, setHideSidebarAndLogo] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationCount] = useState(5);
  const [messageCount] = useState(4);

  
  useEffect(() => {
    const authPaths = ['/login', '/forget-password', '/new-password'];
    setHideSidebarAndLogo(authPaths.includes(location.pathname));
  }, [location.pathname]);

 
  useEffect(() => {
    setSidebarOpen(isDesktop && !isIpad);
  }, [isDesktop, isIpad]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const isEmployeesAllRoute = location.pathname === '/dashboard/all-employees';

  return (
    <Grid container sx={{ backgroundColor: "#424252", padding: 2 }}>
      {!hideSidebarAndLogo && (
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                padding: 1,
                borderRadius: "12px",
                backgroundColor: '#121224',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              
              {(isMobile || isTablet || isIpad) && !sidebarOpen && (
                <IconButton onClick={toggleSidebar} sx={{ color: 'white' }}>
               
                </IconButton>
              )}

              {(isDesktop && !isIpad && sidebarOpen) && (
                <img className="navbar-logo" src={Logo} alt="Logo" style={{ height: '30px' }} />
              )}

      
              <div className='navbar-items' style={{ display: 'flex', alignItems: 'center' }}>
                {!isMobile && (
                  <>
                    <Badge badgeContent={notificationCount} color="error" sx={{ marginRight: 1 }}>
                      <NotificationsActiveIcon />
                    </Badge>
                    <Badge badgeContent={messageCount} color="success" sx={{ marginRight: 1 }}>
                      <MessageIcon />
                    </Badge>
                  </>
                )}
                <p>Hello<br />Krishani</p>
                <img src={profile} alt="Profile" className='navprofile-img' />
              </div>
            </Paper>
          </Grid>
        </Grid>
      )}

     
      {!hideSidebarAndLogo && (
        <Grid item xs={12} md={false} lg={sidebarOpen ? 2 : false}>
          <SideNav open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </Grid>
      )}


      <Grid item xs={12} md={12} lg={sidebarOpen ? 7 : 12} sx={{ marginLeft: 0 }}>
        <Outlet />
      </Grid>


      {!hideSidebarAndLogo && (
        <Grid item xs={12} md={12} lg={sidebarOpen ? 3 : 0}>
          {isEmployeesAllRoute ? <Summary /> : <Holidays />}
        </Grid>
      )}
    </Grid>
  );
}

export default Dashboard;