import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';


const Dashboard = () => {
  // Define an array of withdrawal requests
  const withdrawalRequests = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Pending',
      price: '$100',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Approved',
      price: '$200',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Rejected',
      price: '$200',
    },
    // Add more withdrawal requests as needed
  ];

  return (
    <div>
      <Typography variant="h4" sx={{ margin: '1rem 0', color: '#45f884' }}>
        Payment Requests
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align='center'>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {withdrawalRequests.map((request, index) => (
            <TableRow key={index}>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.email}</TableCell>
              <TableCell>{request.price}</TableCell>
              <TableCell>
                <Chip
                  label={request.status}
                  color={request.status === 'Approved' ? 'success' : 'pending' ? 'default' : 'error'}
                />
              </TableCell>
              <TableCell sx={{
                display:'flex',
                justifyContent:'space-evenly'

              }}>
                <Button variant='contained' color='success'>Approved</Button>
                <Button variant='contained' sx={{
                    bgcolor: '#DC4C64',
                  }}>Rejected</Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>


      <Typography variant="h5" sx={{ margin: '2rem 0' }}>
        Payment Details Table
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Requested Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {withdrawalRequests.map((request, index) => (
            <TableRow key={index}>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.email}</TableCell>
              <TableCell>{request.price}</TableCell>
              <TableCell>
                <Chip
                  label={request.status}
                  color={request.status === 'Approved' ? 'success' : 'pending' ? 'default' : 'error'}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Dashboard;
