import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const participants = [
  { name: 'Frozen yoghurt', rank: 159, noofgame: 24, winner: 4.0, price: 3.99 },
  { name: 'Ice cream sandwich', rank: 237, noofgame: 37, winner: 4.3, price: 4.99 },
  { name: 'Eclair', rank: 262, noofgame: 24, winner: 6.0, price: 3.79 },
  { name: 'Cupcake', rank: 305, noofgame: 67, winner: 4.3, price: 2.5 },
  { name: 'Gingerbread', rank: 356, noofgame: 49, winner: 3.9, price: 1.5 }
];

const getWinnerName = () => {
  const winner = participants.find(participant => participant.rank === 1);
  return winner ? winner.name : 'No Winner Yet';
};

const TableCollapsible = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParticipants = participants.filter(participant =>
    participant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Box mb={4}>
        <Paper elevation={3} style={{ padding: '1rem' }}>
          <Typography variant="h5" color="primary" gutterBottom>
            Winner
          </Typography>
          <Typography variant="h6" gutterBottom>
            {getWinnerName()}
          </Typography>
        </Paper>
      </Box>
      <TextField
        label="Search Participant"
        variant="outlined"
        size="small"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        fullWidth
        style={{ marginBottom: '1rem' }}
      />
      <TableContainer component={Paper}>
        <Table aria-label="participants table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredParticipants.map(participant => (
              <TableRow key={participant.name}>
                <TableCell>{participant.name}</TableCell>
                <TableCell>{participant.rank}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default TableCollapsible;
