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
const ProjectPage = () => {
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
  const [tournamentName, setTournamentName] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [platformName, setPlatformName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [participationType, setParticipationType] = useState('team');
  const [timezone, setTimezone] = useState('');


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

  const handleCreateProject = () => {
    alert(`Creating project: ${projectName}`);
    setOpenDialog(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Project
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenDialog}
        >
          Create Project
        </Button>
      </Box>

      <Grid container spacing={2} marginTop={2} sx={{ padding: '1rem' }} >
        {projects.map((project) => (
          <Grid item xs={12} sm={6} key={project.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog fullScreen open={openDialogBox} onClose={handleCloseDialog}

      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0 30rem',

        }}>

          <DialogTitle>Create New Project</DialogTitle>
          <DialogContent>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 1rem',
              margin: '1rem 0',

            }}>

              <TextField
                label="Project Name"
                variant="outlined"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                margin="normal"
                sx={{
                  width: '50%',
                }}
              />
              <Stack sx={{ width: '50%' }} spacing={2}>
                <Alert sx={{
                  width: '100%',
                  height: '100px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',

                }} severity="info">Need a Hand? Checkout the organizer</Alert>
              </Stack>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                padding: '0 1rem',
                margin: '1rem 0',
              }}
            >
              <img
                src="https://organizer.toornament.com/disciplines/pubg_mobile/img/cover-225x300-medium.jpg"
                alt=""
                style={{
                  flex: 0.01,
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
              /><img
                src="https://organizer.toornament.com/disciplines/valorant/img/cover-225x300-medium.jpg"
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
              /><img
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
              /><img
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
            </Box>

            <TextField
              label="Discipline"
              variant="outlined"
              fullWidth
              value={discipline}
              onChange={(e) => setDiscipline(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Platform Name"
              variant="outlined"
              fullWidth
              value={platformName}
              onChange={(e) => setPlatformName(e.target.value)}
              margin="normal"
            />
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',

            }}>

              <TextField
                label="Team Size"
                variant="outlined"
                fullWidth
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                margin="normal"
              />
              <FormControl fullWidth margin="normal" >
                <RadioGroup
                  value={participationType}
                  onChange={(e) => setParticipationType(e.target.value)}
                >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}>
                    <Typography variant="h6" gutterBottom sx={{
                      padding: '0 1rem',
                    }}>
                      Participation Type
                    </Typography>
                    <FormControlLabel
                      value="team"
                      control={<Radio />}
                      label="Team"
                    />
                    <FormControlLabel
                      value="single"
                      control={<Radio />}
                      label="Single"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
            <FormControl fullWidth margin="normal">
              <Select
                label="Timezone"
                variant="outlined"
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                defaultValue='timezone1'
              >
                <MenuItem value="timezone1">Timezone 1</MenuItem>
                <MenuItem value="timezone2">Timezone 2</MenuItem>
                <MenuItem value="timezone3">Timezone 3</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button variant="contained" color="primary" onClick={handleCreateProject}>
              Create
            </Button>
          </DialogActions>
        </Box>

      </Dialog>

      <Dialog fullWidth open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Create New Tournament</DialogTitle>
        <DialogContent>
          <TextField
            label="Tournament Name"
            variant="outlined"
            fullWidth
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleCreateProject}>
            Create
          </Button>
        </DialogActions>
      </Dialog>



    </div>
  );
};

export default ProjectPage;
