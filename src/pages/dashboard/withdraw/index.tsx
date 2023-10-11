import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Withdrawcomponents = () => {
  // Define arrays for running and closed Withdrawscomponents
  const runningWithdraws = [
    {
      name: 'Withdraw 1',
      organizer: 'Organizer 1',
      email: 'organizer1@example.com',
      status: 'Approve',
      price: '$500',
    },
    {
      name: 'Withdraw 2',
      organizer: 'Organizer 2',
      email: 'organizer2@example.com',
      status: 'Approve',
      price: '$750',
    },
    // Add more running Withdraws as needed
  ];



  return (
    <div>
      <Typography variant="h4" sx={{ margin: '1rem 0', color: '#45f884' }}>
        Withdraw Status
      </Typography>

      {/*  Withdraws */}
      <Typography variant="h5" sx={{ margin: '0 auto', textAlign:'center' }}>
         Withdraws
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Withdraw status</TableCell>
            <TableCell>price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {runningWithdraws.map((Withdraw, index) => (
            <TableRow key={index}>
              <TableCell>{Withdraw.name}</TableCell>
              <TableCell>{Withdraw.email}</TableCell>
              <TableCell>
                <Chip
                  label={Withdraw.status}
                  color={Withdraw.status === 'Approved' ? 'success' : 'pending' ? 'default' : 'error'}
                />
              </TableCell>
              <TableCell>{Withdraw.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>


    </div>
  );
};

export default Withdrawcomponents;
