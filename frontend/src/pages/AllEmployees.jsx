import React, { useState } from 'react';
import { Box, Paper, Button, Typography, Grid, Pagination } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const AllEmployees = () => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 14;

  const [employees, setEmployee] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:5000/all-employees')
    .then(res => setEmployee(res.data))
    .catch(err => console.log(err));
  }, [])



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const totalCount = employees.length;
  const totalPages = Math.ceil(totalCount / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedEmployees = employees.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Box sx={{ padding: 3 }} className="page-container">
      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
        <Typography variant="h5" color="white">Employees</Typography>
        <Button
          component={Link}
          to="/dashboard/add-new-employee"
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ 
            backgroundColor: '#65737E', 
            textTransform: 'none',
            '&:hover': { backgroundColor: '#566370' }
          }}
        >
          Add Employee
        </Button>
      </Grid>

      <Paper sx={{ backgroundColor: '#2a3042', borderRadius: '12px', overflow: 'hidden',padding:3 }}>
        <Grid container sx={{ padding: '12px 16px', borderBottom: '1px solid rgba(255, 255, 255, 0.12)',marginLeft:4 }}>
          <Grid item xs={2}><Typography variant="subtitle2" color="white" fontWeight="bold">EM No</Typography></Grid>
          <Grid item xs={2}><Typography variant="subtitle2" color="white" fontWeight="bold">Name</Typography></Grid>
          <Grid item xs={3}><Typography variant="subtitle2" color="white" fontWeight="bold">Email Address</Typography></Grid>
          <Grid item xs={2}><Typography variant="subtitle2" color="white" fontWeight="bold">Company</Typography></Grid>
          <Grid item xs={3}><Typography variant="subtitle2" color="white" fontWeight="bold">Attendance</Typography></Grid>
        </Grid>

        {paginatedEmployees.map((employee, index) => (
          <Grid container key={`${employee.emNo}-${index}`} sx={{ marginLeft:4,padding: '12px 16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.03)' } }}>
              <Grid item xs={2}><Typography variant="body2" sx={{ fontSize: "12px" }} color="white">{employee.employee_id}</Typography></Grid>
              <Grid item xs={2}><Typography sx={{ fontSize: "12px" }} variant="body2" color="white">{employee.first_name}</Typography></Grid>
              <Grid item xs={3}><Typography sx={{ fontSize: "12px" }} variant="body2" color="white">{employee.email}</Typography></Grid>
              <Grid item xs={2}><Typography sx={{ fontSize: "12px" }} variant="body2" color="white">{employee.company}</Typography></Grid>
              {/* <Grid item xs={3} sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: employee.statusColor, mr: 1 }} />
                <Typography sx={{ fontSize: "12px" }} variant="body2" color="white">{employee.attendance}</Typography>
              </Grid> */}
          </Grid>

        ))}

<Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
  <Pagination
    count={totalPages}
    page={page}
    onChange={handleChangePage}
    sx={{
      '& .MuiPaginationItem-root': {
        color: 'white',
        borderRadius: 1, 
        '&.Mui-selected': {
          backgroundColor: 'white', 
          color: 'black', 
        },
      },
    }}
  />
</Box>

      </Paper>
    </Box>
  );
};

export default AllEmployees;
