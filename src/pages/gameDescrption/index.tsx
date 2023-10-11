// import React from 'react';
// import { Typography, Box, Button, Card, CardContent, CardHeader, Avatar, Grid, TextField } from '@mui/material';
// // ** React Imports
// import { ReactNode } from 'react'

// // ** Layout Import
// import BlankLayout from 'src/@core/layouts/BlankLayout'
// import Table from 'src/views/dashboard/Table'
// import TableCustomized from './table/TableCustomized';
// import { Url } from 'url';

// const players = [
//   { id: 1, name: 'Player 1 ' },
//   { id: 2, name: 'Player 2' },
//   { id: 3, name: 'Player 3' },
//   // Add more players as needed
// ];

// const GameDescription = ({ match }: any) => {
//   const Image = '/images/cards/images.jpg'

//   return (
//     <Box sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '150vh',
//       bgcolor: '#000',
//       color: '#fff',
//       backgroundColor: '#000',
//     }}>

//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: '40px',
//           borderRadius: '10px',
//           width: '100%',
//           backgroundImage: `url(${Image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           marginTop:'-280px'

//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             flexDirection: 'column',
//             width: '50%',
//           }}
//         >

//           <Typography variant="h2" gutterBottom sx={{
//             color: '#45f884',
//           }}>
//             Tournafest
//           </Typography>
//           <Typography variant="h6" gutterBottom sx={{
//             color: '#45f884',
//           }}>
//             Status : Online
//           </Typography>
//           <Typography variant="subtitle1" sx={{
//             color: '#fff',
//           }}>
//             Online Tournament | Date: August 31, 2023
//           </Typography>
//         </Box>


//         <Card variant="outlined" sx={{
//           marginTop: '60px', width: '300px',
//           backgroundColor: '#333',
//           color: '#fff',
//           borderRadius: '10px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexDirection: 'column',
//         }}>
//           <CardContent>
//             <Typography variant="h6" sx={{
//               color: '#fff',
//             }}>Register Now</Typography>
//             <Typography variant="body2" sx={{
//               marginTop: '10px', color: '#fff',
//             }}>
//               Total Participants: {players.length} / 16
//             </Typography>
//             <Button variant="contained" color="primary" style={{ marginTop: '10px', color: '#fff' }}>
//               Register
//             </Button>
//           </CardContent>
//         </Card>
//       </Box>


//       <Box
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-evenly',
//           alignItems: 'center',
//           width: '100%',
//           marginBottom: '20px',
//           marginTop:'10px'
//         }}
//       >

//         <TextField
//           label="Search Player"
//           variant="outlined"
//           defaultValue={''}
//           InputLabelProps={{
//             style: { color: '#fff' }, // Label color
//           }}
//           inputProps={{
//             style: {
//               color: '#fff', // Text color
//               backgroundColor: '#333',
//               borderRadius: '10px',
//             },
//           }}
//           sx={{ marginBottom: '20px', width: '20%' }}
//         /><TextField
//           label="Platform"
//           variant="outlined"
//           defaultValue={''}
//           InputLabelProps={{
//             style: { color: '#fff' }, // Label color
//           }}
//           inputProps={{
//             style: {
//               color: '#fff', // Text color
//               backgroundColor: '#333',
//               borderRadius: '10px',
//             },
//           }}
//           sx={{ marginBottom: '20px', width: '20%' }}
//         />
//       </Box>

//       <Grid spacing={2} sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexDirection: 'column',
//         alignItems: 'center',
//         bgcolor: '#000',
//         color: '#fff',
//         border: '1px solid #333',
//         padding: '10px',
//         borderRadius: '10px',
//         width: '80%',
//       }}>
//         <TableCustomized />
//       </Grid>
//     </Box >
//   );
// };

// export default GameDescription;
// GameDescription.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>




import React, { useState, useEffect } from 'react'
import {
  Box,
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
  Paper,
  Avatar,
  Tab,
  Tabs
} from '@mui/material'
import Navbar from 'src/views/homeView/navbar'
import Footer from 'src/views/homeView/footer'
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Link from 'next/link'

// Mocked tournament data
const tournaments = [
  {
    name: 'Tournament 1',
    platform: 'PC',
    prize: 100,
    fee: 10,
    organizer: 'John Doe',
    participants: 25,
    totalParticipants: 50,
    status: 'Open'
  },
  {
    name: 'Tournament 2',
    platform: 'Mobile',
    prize: 50,
    fee: 5,
    organizer: 'Jane Smith',
    participants: 40,
    totalParticipants: 60,
    status: 'Closed'
  },
  {
    name: 'Tournament 3',
    platform: 'Playstation',
    prize: 200,
    fee: 15,
    organizer: 'Robert Johnson',
    participants: 30,
    totalParticipants: 45,
    status: 'Open'
  }
  // Add more tournament data
]

const GameDescription = () => {
  const [platform, setPlatform] = useState('All') // Default platform is 'All'
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredTournaments, setFilteredTournaments] = useState(tournaments)
  const [sortBy, setSortBy] = useState(null)
  const [tabValue, setTabValue] = useState('Open') // Default tab is 'Open'

  // Function to get the first letter of the organizer's name for the avatar
  const getAvatarInitial:any = name => {
    return name ? name[0].toUpperCase() : ''
  }

  // Filter and sort tournaments based on the selected platform, search query, sorting criteria, and tab selection
  useEffect(() => {
    let filtered = tournaments.filter(
      tournament =>
        (platform === 'All' || tournament.platform === platform) &&
        tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (tabValue === 'All' || tournament.status === tabValue)
    )

    if (sortBy === 'prize-high') {
      filtered = filtered.sort((a, b) => b.prize - a.prize)
    } else if (sortBy === 'prize-low') {
      filtered = filtered.sort((a, b) => a.prize - b.prize)
    } else if (sortBy === 'fee-high') {
      filtered = filtered.sort((a, b) => b.fee - a.fee)
    } else if (sortBy === 'fee-low') {
      filtered = filtered.sort((a, b) => a.fee - b.fee)
    }

    setFilteredTournaments(filtered)
  }, [platform, searchQuery, sortBy, tabValue])

  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#000', marginTop: '80px' }}>
      <Navbar />
      <Container sx={{ mt: 3, minHeight: '100vh' }}>
        <Typography variant='h4' sx={{ mb: 2, color: '#fff' }}>
          Tournament List
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              label='Search Tournament'
              variant='outlined'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              sx={{ mr: 2, border: '1px solid #fff', borderRadius: '4px' }}
            />
            <FormControl sx={{ minWidth: 120 , border: '1px solid #fff', borderRadius: '4px'}}>
              <InputLabel>Platform</InputLabel>
              <Select value={platform} onChange={e => setPlatform(e.target.value)}>
                <MenuItem value='All'>All</MenuItem>
                <MenuItem value='PC'>PC</MenuItem>
                <MenuItem value='Mobile'>Mobile</MenuItem>
                <MenuItem value='Playstation'>Playstation</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ minWidth: 120, ml: 2, color: 'white', border: '1px solid #fff', borderRadius: '4px' }}>
              <InputLabel>Sort By</InputLabel>
              <Select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <MenuItem value='none'>None</MenuItem>
                <MenuItem value='prize-high'>Prize: High to Low</MenuItem>
                <MenuItem value='prize-low'>Prize: Low to High</MenuItem>
                <MenuItem value='fee-high'>Fee: High to Low</MenuItem>
                <MenuItem value='fee-low'>Fee: Low to High</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} >
            <Tab label='Open' value='Open' />
            <Tab label='Closed' value='Closed' />
            <Tab label='All' value='All' />
          </Tabs>
        </Box>
        <Grid container spacing={3}>
          {filteredTournaments.map((tournament, index) => (
            <Grid key={index} item xs={12}>
              <Paper
                elevation={3}
                sx={{
                  borderRadius: '12px',
                  padding: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      backgroundColor: '#1976D2'
                      // Set a background color for the avatar
                    }}
                  >
                    {getAvatarInitial(tournament.organizer)}
                  </Avatar>
                  <Box>
                    <Typography variant='h6'>{tournament.name}</Typography>
                    <Typography>
                      <span role='img' aria-label='Prize'>
                        🏆
                      </span>{' '}
                      Prize: {tournament.prize}
                      &nbsp;|&nbsp;
                      <span role='img' aria-label='Fee'>
                        💰
                      </span>{' '}
                      Fee: {tournament.fee}
                    </Typography>
                    <Typography>Organized by {tournament.organizer}</Typography>
                  </Box>
                </Box>
                <Typography variant='body2' color='textSecondary'>
                  {tournament.participants} joined out of {tournament.totalParticipants}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  Status: {tournament.status}
                </Typography>
                <Link href='/room'>
                  <Button variant='contained' color='primary'>
                    Register
                  </Button>
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  )
}

GameDescription.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default GameDescription
