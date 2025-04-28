import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Pagination, Box } from "@mui/material";
import { Edit, Delete, Visibility } from "@mui/icons-material";

const leaveData = [
  { type: "Casual Leave", startDate: "10/12/2024", endDate: "10/16/2024", duration: "4 Days", status: "Pending", color: "#FFA500" },
  { type: "Annual Leave", startDate: "10/02/2025", endDate: "15/02/2025", duration: "5 Days", status: "Pending", color: "#FFA500" },
  { type: "Casual Leave", startDate: "10/12/2024", endDate: "10/16/2024", duration: "4 Days", status: "Rejected", color: "#FF0000" },
  { type: "Casual Leave", startDate: "10/12/2024", endDate: "10/16/2024", duration: "4 Days", status: "Approved", color: "#008000" },
  { type: "Casual Leave", startDate: "10/12/2024", endDate: "10/16/2024", duration: "4 Days", status: "Approved", color: "#008000" },
  { type: "Sick Leave", startDate: "12/05/2025", endDate: "12/10/2025", duration: "5 Days", status: "Pending", color: "#FFA500" },
  { type: "Maternity Leave", startDate: "01/01/2025", endDate: "15/01/2025", duration: "15 Days", status: "Approved", color: "#008000" },
  { type: "Casual Leave", startDate: "20/11/2024", endDate: "24/11/2024", duration: "4 Days", status: "Approved", color: "#008000" },
  { type: "Casual Leave", startDate: "01/03/2025", endDate: "05/03/2025", duration: "4 Days", status: "Pending", color: "#FFA500" },
  { type: "Study Leave", startDate: "15/07/2025", endDate: "30/07/2025", duration: "15 Days", status: "Rejected", color: "#FF0000" }
];

const LeaveHistory = () => {
  const [page, setPage] = useState(1);  
  const itemsPerPage = 5; 

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const totalPages = Math.ceil(leaveData.length / itemsPerPage); 

  const paginatedData = leaveData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Paper sx={{ backgroundColor: "#2a3042", padding: 2, borderRadius: 2, marginTop: "8px" }}>
      <h2 style={{ color: "white", marginLeft: "16px" }}>Leave History</h2>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {['Leave Type', 'Start Date', 'End Date', 'Duration', 'Status', ''].map((header) => (
                <TableCell key={header} sx={{ color: "white", fontWeight: "bold" }}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
       <TableBody>
  {paginatedData.map((row, index) => (
    <TableRow key={index}>
      <TableCell sx={{ color: "white" }}>{row.type}</TableCell>
      <TableCell sx={{ color: "white" }}>{row.startDate}</TableCell>
      <TableCell sx={{ color: "white" }}>{row.endDate}</TableCell>
      <TableCell sx={{ color: "white" }}>{row.duration}</TableCell>

      <TableCell sx={{ color: "white", display: 'flex', alignItems: 'center', gap: 1,marginTop:"20px" }}>
        <Box
          sx={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: row.color,
          }}
        />
        {row.status}
      </TableCell>
      <TableCell>
        <IconButton sx={{ color: "#4A90E2" }}><Edit /></IconButton>
        <IconButton sx={{ color: "#4A90E2" }}><Visibility /></IconButton>
        <IconButton sx={{ color: "#D9534F" }}><Delete /></IconButton>
      </TableCell>
    </TableRow>
  ))}
</TableBody>
        </Table>
      </TableContainer>

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
  );
};

export default LeaveHistory;
