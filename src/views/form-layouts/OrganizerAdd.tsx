import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Dialog, DialogTitle, TextField } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

const OrganizerAdd = () => {
  // Sample data for the project cards
  const projects = [
    { id: 1, name: 'Project 1', description: 'Description for Project 1' },
    { id: 2, name: 'Project 2', description: 'Description for Project 2' },
    { id: 3, name: 'Project 3', description: 'Description for Project 3' },
  ];

  // State to manage the dialog
  const [openDialog, setOpenDialog] = useState(false);
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [age, setage] = useState('');
  const [Password, setPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setOpenDialogBox(false);
  };

  const handleOpenDialogBox = () => {
    setOpenDialogBox(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setOpenDialogBox(false);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleCreateProject = () => {
    alert(`Creating project: ${projectName}`);
    // Use selectedFile for file upload
    setOpenDialog(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleCloseDialog}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0 30rem',
        }}
      >
        <DialogTitle>Create New Oragnizer</DialogTitle>
        <DialogContent>
          <TextField
            label="Oragnizer Name"
            variant="outlined"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            margin="normal"
            sx={{
              width: '100%',
            }}
          />
          <TextField
            label="Oragnizer Email"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Age"
            variant="outlined"
            fullWidth
            value={age}
            onChange={(e) => setage(e.target.value)}
            margin="normal"
          />
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />

          <TextField
          label="Password"
          variant="outlined"
          fullWidth
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <TextField
            label="Country"
            variant="outlined"
            fullWidth
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          </Box>

        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleCreateProject}>
            Add
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default OrganizerAdd;
