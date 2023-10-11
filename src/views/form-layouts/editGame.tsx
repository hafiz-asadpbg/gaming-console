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

const EditGame = (
  {
    open,
    handclose,
  }: {
    open: boolean;
    handclose: any;
  }
) => {
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
  const [platformName, setPlatformName] = useState('');
  const [fee, setFee] = useState('');
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
    handclose();
  };

  return (
    <Dialog
      fullWidth
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
        }}
      >
        <DialogTitle>Edit New Project</DialogTitle>
        <DialogContent>
          <TextField
            label="Project Name"
            variant="outlined"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            margin="normal"
            sx={{
              width: '100%',
            }}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            multiline
            rows={3}
          />
          <Select
          value={'All'}
          label="Platform"
          fullWidth
        >
          <MenuItem value="abc">abc</MenuItem>
          <MenuItem value="bca">bca</MenuItem>
          <MenuItem value="abc">abc</MenuItem>
          <MenuItem value="bca">bca</MenuItem>
        </Select>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',

          }}>
          <TextField
            label="Fee"
            variant="outlined"
            fullWidth
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            margin="normal"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            style={{
              width: '100%',
              margin: '1rem 0',
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f8f8f8',
              cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
            }}
          />
          </Box>

        </DialogContent>
        {/* <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '0 1rem',
            margin: '1rem 0',
          }}
        >
          <img
            src="https://organizer.toornament.com/disciplines/fifa23/img/cover-225x300-medium.jpg"
            alt=""
            style={{
              flex: 0.1,
              margin: '0 0.5rem',
              border: '1px solid transparent',
              transition: 'border 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.border = '3px solid #45f884';
            }}
            onMouseOut={(e) => {
              e.target.style.border = '3px solid transparent';
            }}
          />
          <img
            src="https://organizer.toornament.com/disciplines/leagueoflegends/img/cover-225x300-medium.jpg"
            alt=""
            style={{
              flex: 0.1,
              margin: '0 0.5rem',
              border: '1px solid transparent',
              transition: 'border 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.border = '3px solid #45f884';
            }}
            onMouseOut={(e) => {
              e.target.style.border = '3px solid transparent';
            }}
          />
          <img
            src="https://organizer.toornament.com/disciplines/rocketleague/img/cover-225x300-medium.jpg"
            alt=""
            style={{
              flex: 0.1,
              margin: '0 0.5rem',
              border: '1px solid transparent',
              transition: 'border 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.border = '3px solid #45f884';
            }}
            onMouseOut={(e) => {
              e.target.style.border = '3px solid transparent';
            }}
          />
        </Box> */}
        <DialogActions>
          <Button onClick={()=> handclose()}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleCreateProject}>
            Create
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default EditGame;
