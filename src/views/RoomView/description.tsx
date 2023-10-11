/*import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const players = [
  { Card:'Description', id: 1, name: 'Player 1' },
  { Card:'TimeZone',id: 2, name: 'Player 2' },
  { Card:'Stucture',id: 3, name: 'Player 3' },
  { Card:'Prize',id: 4, name: 'Player 4' },
  // Add more players as needed
];

const Description = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>

      {players.map(player => (
        <Card
          key={player.id}
          sx={{ boxShadow: 0, color: 'common.black', backgroundColor: 'primary.white', margin: '20px',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '50%', width: 'calc(50% - 40px)', padding: '10px', border: '1px solid #45f884'
        }}
        >
          <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5, 4.5)} !important` }}>
            <Typography
              variant='h6'
              sx={{ display: 'flex', marginBottom: 2.75, alignItems: 'center', color: 'common.black' }}
            >
              {player.Card}
            </Typography>
            <Typography variant='body2' sx={{ marginBottom: 3, color: 'common.black' }}>
            You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital
              ingredients in an effective.You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital
              ingredients in an effective.You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital
              ingredients in an effective.You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital
              ingredients in an effective.You’ve read about the importance of being courageous, rebellious and imaginative. These are all vital
              ingredients in an effective.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
                <Avatar alt={player.name} src={`/images/avatars/${player.id}.png`} sx={{ width: 34, height: 34, marginRight: 2.75 }} />
                <Typography variant='body2' sx={{ color: 'common.black' }}>
                  {player.name}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Description;
*/

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; // Import the money icon
import { rgbToHex } from '@mui/material';

const descriptions = [
  { type: 'Description', id: 1, title: 'Class Overview', content: 'This class covers a wide range of topics related to web development. By the end of the course, you will have a strong foundation in HTML, CSS, and JavaScript.' },
  // Add more descriptions as needed
];

const registrations = [
  { type: 'Registration', id: 1, title: 'Register Game', content: '', fee: 100 }, // Add the fee property
  // Add more registration information as needed
];

const prizes = [
  { type: 'Prize', id: 1, title: 'Winning Prize', content: '$1000' },
  // Add more prize information as needed
];

const timings = [
  { type: 'Timing', id: 1, title: 'Game Timing', content: 'Start: 10:00 AM | End: 2:00 PM' },
  // Add more timing information as needed
];

const InnerClassroom = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleRegisterOpen = () => {
    setIsRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setIsRegisterOpen(false);
  };

  // Placeholder values for total and joined participants
  const totalParticipants = 100;
  const joinedParticipants = 50;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
         minHeight:'90vh',        padding: '10px',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
        {/* Registrations */}
        <Box sx={{ width: '50%', paddingRight: '20px', minWidth: 700 }}>
          {registrations.map((registration) => (
            <Card
              key={registration.id}
              sx={{
                boxShadow: 0,
                backgroundColor: 'primary',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #E71D1D',
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ color: '#E71D1D' }}>
                  {registration.type}
                </Typography>
                <Typography variant='subtitle1'>
                  {registration.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  {registration.content}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  Total Participants: {joinedParticipants}/{totalParticipants}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}>
                  <AttachMoneyIcon sx={{ marginRight: '5px' }} /> {/* Money icon */}
                  <Typography variant='body2'>
                    Fee Amount: ${registration.fee}
                  </Typography>
                </Box>
                <Button variant='contained' color='primary' onClick={handleRegisterOpen} sx={{ marginTop: '15px' }}>
                  Register
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Prizes */}
        <Box sx={{ width: '50%', paddingLeft: '20px' }}>
          {prizes.map((prize) => (
            <Card
              key={prize.id}
              sx={{
                boxShadow: 0,
                backgroundColor: '#fff',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #45f884',
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ color: '#45f884' }}>
                  {prize.type}
                </Typography>
                <Typography variant='subtitle1'>
                  {prize.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  {prize.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Registration Form Dialog */}
        <Dialog open={isRegisterOpen} onClose={handleRegisterClose}>
          <DialogTitle>Register for the Class</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please provide your information to register for the class.
            </DialogContentText>
            <TextField autoFocus margin='dense' label='Full Name' type='text' fullWidth />
            <TextField margin='dense' label='Email Address' type='email' fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRegisterClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={handleRegisterClose} color='primary'>
              Register
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        {/* Descriptions */}
        <Box sx={{ width: '50%', paddingRight: '20px', minWidth: 700 }}>
          {descriptions.map((description) => (
            <Card
              key={description.id}
              sx={{
                boxShadow: 0,
                backgroundColor: '#f1f8ff',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #1a73e8',
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ color: '#1a73e8' }}>
                  {description.type}
                </Typography>
                <Typography variant='subtitle1'>
                  {description.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  {description.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Timings */}
        <Box sx={{ width: '30%', paddingLeft: '20px' }}>
          {timings.map((timing) => (
            <Card
              key={timing.id}
              sx={{
                boxShadow: 0,
                backgroundColor: '#fff',
                marginBottom: '15px',
                padding: '10px',
                borderLeft: '3px solid #ffa726',
              }}
            >
              <CardContent>
                <Typography variant='h6' sx={{ color: '#ffa726' }}>
                  {timing.type}
                </Typography>
                <Typography variant='subtitle1'>
                  {timing.title}
                </Typography>
                <Typography variant='body2' sx={{ color: 'rgba(0, 0, 0, 0.6)', marginTop: '10px' }}>
                  {timing.content}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default InnerClassroom;
