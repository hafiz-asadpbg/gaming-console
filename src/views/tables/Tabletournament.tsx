import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const StyledCard = styled(Card)({
  marginBottom: '16px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
});

const createData = (name: string, email: string, Platform: string, age: number, country: string, status:string) => {
  return { name, email, Platform, age, country,status };
};

const rows = [
  createData('Frozen yoghurt etc', 'abd@gmail.com', 'Pc/Ps 4', 4.0, 'pakistan','Approved'),
  createData('Ice cream sandwich', 'abd@gmail.com', 'Pc/Ps 4', 4.3, 'pakistan','Approved'),
  createData('Eclair cream sandw', 'abd@gmail.com', 'Pc/Ps 4', 6.0, 'pakistan','Approved'),
  createData('Frozen yoghurt etc', 'abd@gmail.com', 'Pc/Ps 4', 4.3, 'pakistan','Approved'),
  createData('Frozen yoghurt etc', 'abd@gmail.com', 'Pc/Ps 4', 3.9, 'pakistan','Approved'),
];

const Tabletournament = () => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editedPlayer, setEditedPlayer] = useState(null);

  const handleEditClick = (player: React.SetStateAction<null>) => {
    setEditedPlayer(player);
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditedPlayer(null);
    setEditDialogOpen(false);
  };

  const handleSaveEdit = () => {
    // Add logic to save edited player details here
    // You can access the edited player details in the `editedPlayer` state
    handleCloseEditDialog();
  };

  return (
    <Box sx={{
      backgroundColor:'transparent'
    }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Platform</TableCell>
            <TableCell>Country</TableCell>
            <TableCell align='center'>Status</TableCell>

            <TableCell align='center'>Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows, index) => (
            <TableRow key={index}>
              <TableCell>{rows.name}</TableCell>
              <TableCell>{rows.email}</TableCell>
              <TableCell>{rows.Platform}</TableCell>
              <TableCell>{rows.country}</TableCell>
              <TableCell align='center'>
                <Chip
                  label={rows.status}
                  color={rows.status === 'Approved' ? 'success' : 'pending' ? 'default' : 'error'}
                />
              </TableCell>
              <TableCell sx={{
                display:'flex',
                justifyContent:'space-evenly'

              }}>

                <Button variant='contained' onClick={handleEditClick}>View</Button>
                <Button variant='contained' sx={{
                    bgcolor: '#DC4C64',
                  }}>Freez</Button>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog fullWidth open={editDialogOpen} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Player Details</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <TextField
            label="Name"
            fullWidth
            value={editedPlayer ? editedPlayer.name : ''}
            onChange={(e) => setEditedPlayer({ ...editedPlayer, name: e.target.value })}
          />
          <TextField
            label="Email"
            fullWidth
            value={editedPlayer ? editedPlayer.email : ''}
            onChange={(e) => setEditedPlayer({ ...editedPlayer, email: e.target.value })}
          />
          <TextField
            label="Age"
            fullWidth
            value={editedPlayer ? editedPlayer.age : ''}
            onChange={(e) => setEditedPlayer({ ...editedPlayer, age: e.target.value })}
          />
          <TextField
            label="Platform"
            fullWidth
            value={editedPlayer ? editedPlayer.protein : ''}
            onChange={(e) => setEditedPlayer({ ...editedPlayer, protein: e.target.value })}
          />
          <TextField
            label="Country"
            fullWidth
            value={editedPlayer ? editedPlayer.protein : ''}
            onChange={(e) => setEditedPlayer({ ...editedPlayer, protein: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button onClick={handleSaveEdit}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Tabletournament;
