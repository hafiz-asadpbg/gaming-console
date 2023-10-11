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

const Tournamentscomponents = () => {
  // Define arrays for running and closed Tournamentscomponents
  const runningTournaments = [
    {
      name: 'Tournament 1',
      organizer: 'Organizer 1',
      email: 'organizer1@example.com',
      fee: '$50',
      prize: '$500',
      status:'approved'
    },
    {
      name: 'Tournament 2',
      organizer: 'Organizer 2',
      email: 'organizer2@example.com',
      fee: '$75',
      prize: '$750',
      status:'approved'

    },
    // Add more running tournaments as needed
  ];

  const closedTournaments = [
    {
      name: 'Tournament 3',
      organizer: 'Organizer 3',
      email: 'organizer3@example.com',
      fee: '$60',
      prize: '$600',
      status:'approved'

    },
    {
      name: 'Tournament 4',
      organizer: 'Organizer 4',
      email: 'organizer4@example.com',
      fee: '$80',
      prize: '$800',
      status:'approved'

    },
    // Add more closed tournaments as needed
  ];

  return (
    <div>
      <Typography variant="h4" sx={{ margin: '1rem 0', color: '#45f884' }}>
        Tournament Status
      </Typography>

      {/* Running Tournaments */}
      <Typography variant="h5" sx={{ margin: '0 auto', textAlign: 'center' }}>
        Running Tournaments
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tournament Name</TableCell>
            <TableCell>Organizer</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Tournament Fee</TableCell>
            <TableCell>Prize</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {runningTournaments.map((tournament, index) => (
            <TableRow key={index}>
              <TableCell>{tournament.name}</TableCell>
              <TableCell>{tournament.organizer}</TableCell>
              <TableCell>{tournament.email}</TableCell>
              <TableCell>{tournament.fee}</TableCell>
              <TableCell>{tournament.prize}</TableCell>
              <TableCell>
                <Chip
                  label={tournament.status}
                  color={tournament.status === 'Approved' ? 'success' : 'pending' ? 'default' : 'error'}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Closed Tournaments */}
      <Typography variant="h5" sx={{ margin: '0 auto', textAlign: 'center' }}>
        Closed Tournaments
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tournament Name</TableCell>
            <TableCell>Organizer</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Tournament Fee</TableCell>
            <TableCell>Prize</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {closedTournaments.map((tournament, index) => (
            <TableRow key={index}>
              <TableCell>{tournament.name}</TableCell>
              <TableCell>{tournament.organizer}</TableCell>
              <TableCell>{tournament.email}</TableCell>
              <TableCell>{tournament.fee}</TableCell>
              <TableCell>{tournament.prize}</TableCell>
              <TableCell>
                <Chip
                  label={tournament.status}
                  color={tournament.status === 'Approved' ? 'success' : 'pending' ? 'default' : 'error'}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Tournamentscomponents;
