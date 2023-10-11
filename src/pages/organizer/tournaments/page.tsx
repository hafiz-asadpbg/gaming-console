import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import { Dialog, DialogTitle, FormControlLabel, Radio } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const TournamentList = () => {
  const [searchText, setSearchText] = useState('');
  const [searchStatus, setSearchStatus] = useState('All');
  const [openDialogBox, setOpenDialogBox] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [tournamentName, setTournamentName] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [platformName, setPlatformName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [participationType, setParticipationType] = useState('team');
  const [timezone, setTimezone] = useState('');
  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: 'Tournament 1',
      status: 'Publish',
      date: '2023-09-25',
    },
    {
      id: 2,
      name: 'Tournament 2',
      status: 'Draft',
      date: '2023-10-10',
    },
    {
      id: 3,
      name: 'Tournament 3',
      status: 'Publish',
      date: '2023-09-18',
    },
    {
      id: 4,
      name: 'Tournament 4',
      status: 'Draft',
      date: '2023-10-05',
    },
    {
      id: 5,
      name: 'Tournament 5',
      status: 'Publish',
      date: '2023-09-30',
    },
    {
      id: 6,
      name: 'Tournament 6',
      status: 'Draft',
      date: '2023-10-15',
    },
  ]);

  const filteredTournaments = tournaments.filter((tournament) => {
    const nameMatch = tournament.name.toLowerCase().includes(searchText.toLowerCase());
    const statusMatch = searchStatus === 'All' || tournament.status === searchStatus;
    return nameMatch && statusMatch;
  });

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };



  const handleCreateProject = () => {
    alert(`Creating project: ${projectName}`);
    setOpenDialog(false);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setOpenDialogBox(false);
  };


  const handleStatusChange = (event) => {
    setSearchStatus(event.target.value);
  };
  const handleOpenDialogBox = () => {
    setOpenDialogBox(true);
  };


  return (
    <div style={{
      padding:'1rem'
    }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{
        padding:'1rem'
      }}>
        <Typography variant="h4">Project Name</Typography>
        <Button variant="contained" color="primary">
          Create Tournament
        </Button>
      </Box>
      <Box mt={2} >
        <Typography variant="h5">Tournament List</Typography>
        <TextField
          label="Search by Name"
          variant="outlined"

          margin="normal"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              label="Status"
              variant="outlined"
              fullWidth
              margin="normal"
              value={searchStatus}
              onChange={handleStatusChange}
            >
              <option value="All">All</option>
              <option value="Publish">Publish</option>
              <option value="Draft">Draft</option>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <label style={{
                position: 'absolute',
               marginTop: '-10px',
            }}>Start Date</label>
            <TextField
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <label style={{
                position: 'absolute',
                marginTop: '-10px',
                }}>End Date</label>
            <TextField
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
      </Box>
      <Box mt={2} onClick={handleOpenDialogBox}>
        {filteredTournaments.map((tournament) => (
          <Card key={tournament.id} variant="outlined" sx={{
            margin:"1rem"
          }}>
            <CardContent>
              <Typography variant="h6">{tournament.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                Status: {tournament.status}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Date: {tournament.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
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

    </div>
  );
};

export default TournamentList;
