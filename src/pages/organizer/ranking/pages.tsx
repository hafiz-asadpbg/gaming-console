import React, { useState } from 'react';
import { Button, Box, Link as MuiLink } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {Typography, Card} from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const FinalResultsPage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [rank, setRank] = useState('');
  const [participant, setParticipant] = useState('');
  const [link, setLink] = useState('');
  const [results, setResults] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [filterRank, setFilterRank] = useState('');

  const openAddDialog = () => {
    setOpenDialog(true);
  };

  const closeAddDialog = () => {
    setOpenDialog(false);
    setRank('');
    setParticipant('');
    setLink('');
  };

  const addResult = () => {
    if (rank && participant && link) {
      setResults([...results, { rank, participant, link }]);
      closeAddDialog();
    }
  };

  const openEditDialog = (index) => {
    setEditingIndex(index);
    const resultToEdit = results[index];
    setRank(resultToEdit.rank);
    setParticipant(resultToEdit.participant);
    setLink(resultToEdit.link);
    setOpenDialog(true);
  };

  const saveEdit = () => {
    if (rank && participant && link && editingIndex !== null) {
      const updatedResults = [...results];
      updatedResults[editingIndex] = { rank, participant, link };
      setResults(updatedResults);
      closeAddDialog();
      setEditingIndex(null);
    }
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    closeAddDialog();
  };

  const filterResults = () => {
    return results.filter((result) => result.rank.includes(filterRank));
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Final Results
        </Typography>
        <Button variant="contained" color="primary" onClick={openAddDialog}>
          Add
        </Button>
      </Box>
      <Box sx={{
        padding: '16px'
      }}>

        <TextField
          label="Filter by Rank"
          margin="normal"
          value={filterRank}
          onChange={(e) => setFilterRank(e.target.value)}


        />
      </Box>

      {/* Dialog for adding/editing results */}
      <Dialog open={openDialog} onClose={cancelEdit}>
        <DialogTitle>{editingIndex !== null ? 'Edit Result' : 'Add Participant Result'}</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            padding: '16px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextField
            label="Rank"
            fullWidth
            margin="normal"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
          />

          <Select
            label="Participant"
            fullWidth
            value={participant}
            onChange={(e) => setParticipant(e.target.value)}
          >
            <MenuItem value="Participant 1">Participant 1</MenuItem>
            <MenuItem value="Participant 2">Participant 2</MenuItem>
            <MenuItem value="Participant 3">Participant 3</MenuItem>
            <MenuItem value="Participant 4">Participant 4</MenuItem>
            <MenuItem value="Participant 5">Participant 5</MenuItem>
          </Select>
        </DialogContent>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            padding: '16px',
          }}
        >
          <Button onClick={cancelEdit}>Cancel</Button>
          <Button onClick={editingIndex !== null ? saveEdit : addResult} color="primary">
            {editingIndex !== null ? 'Save' : 'Add'}
          </Button>
        </div>
      </Dialog>

      {/* Display the list of results */}
      <Typography variant="h6" gutterBottom sx={{ padding: '16px' }}>
        Results List
      </Typography>
      <Box sx={{
        padding:'16px'
      }}>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Index</TableCell>
                <TableCell>Rank</TableCell>
                <TableCell>Participant</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterResults().map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{index}</TableCell>
                  <TableCell>{result.rank}</TableCell>
                  <TableCell>{result.participant}</TableCell>
                  <TableCell>
                    <MuiLink href={result.link} target="_blank" rel="noopener noreferrer">
                      {result.link}
                    </MuiLink>
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => openEditDialog(index)}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Card sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',

          }}>

          <TextField
            label="Link"
            fullWidth
            margin="normal"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            sx={{
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding:'10px'
            }}
          />
          <Button variant='contained'>
            Publish
          </Button>
          </Card>
        </TableContainer>
      </Box>
    </div>
  );
};

export default FinalResultsPage;
