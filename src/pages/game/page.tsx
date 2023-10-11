// import React, { useState, useEffect } from 'react'
// import {
//   Box,
//   Container,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Button,
//   Grid,
//   Paper,
//   Avatar,
//   Tab,
//   Tabs
// } from '@mui/material'
// import Navbar from 'src/views/homeView/navbar'
// import Footer from 'src/views/homeView/footer'
// import BlankLayout from 'src/@core/layouts/BlankLayout'
// import Link from 'next/link'

// // Mocked tournament data
// const tournaments = [
//   {
//     name: 'Tournament 1',
//     platform: 'PC',
//     prize: 100,
//     fee: 10,
//     organizer: 'John Doe',
//     participants: 25,
//     totalParticipants: 50,
//     status: 'Open'
//   },
//   {
//     name: 'Tournament 2',
//     platform: 'Mobile',
//     prize: 50,
//     fee: 5,
//     organizer: 'Jane Smith',
//     participants: 40,
//     totalParticipants: 60,
//     status: 'Closed'
//   },
//   {
//     name: 'Tournament 3',
//     platform: 'Playstation',
//     prize: 200,
//     fee: 15,
//     organizer: 'Robert Johnson',
//     participants: 30,
//     totalParticipants: 45,
//     status: 'Open'
//   }
//   // Add more tournament data
// ]

// const TournamentList = () => {
//   const [platform, setPlatform] = useState('All') // Default platform is 'All'
//   const [searchQuery, setSearchQuery] = useState('')
//   const [filteredTournaments, setFilteredTournaments] = useState(tournaments)
//   const [sortBy, setSortBy] = useState(null)
//   const [tabValue, setTabValue] = useState('Open') // Default tab is 'Open'

//   // Function to get the first letter of the organizer's name for the avatar
//   const getAvatarInitial:any = name => {
//     return name ? name[0].toUpperCase() : ''
//   }

//   // Filter and sort tournaments based on the selected platform, search query, sorting criteria, and tab selection
//   useEffect(() => {
//     let filtered = tournaments.filter(
//       tournament =>
//         (platform === 'All' || tournament.platform === platform) &&
//         tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
//         (tabValue === 'All' || tournament.status === tabValue)
//     )

//     if (sortBy === 'prize-high') {
//       filtered = filtered.sort((a, b) => b.prize - a.prize)
//     } else if (sortBy === 'prize-low') {
//       filtered = filtered.sort((a, b) => a.prize - b.prize)
//     } else if (sortBy === 'fee-high') {
//       filtered = filtered.sort((a, b) => b.fee - a.fee)
//     } else if (sortBy === 'fee-low') {
//       filtered = filtered.sort((a, b) => a.fee - b.fee)
//     }

//     setFilteredTournaments(filtered)
//   }, [platform, searchQuery, sortBy, tabValue])

//   return (
//     <Box sx={{ flexGrow: 1, bgcolor: '#000', marginTop: '80px' }}>
//       <Navbar />
//       <Container sx={{ mt: 3, minHeight: '100vh' }}>
//         <Typography variant='h4' sx={{ mb: 2, color: '#fff' }}>
//           Tournament List
//         </Typography>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             mb: 2
//           }}
//         >
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <TextField
//               label='Search Tournament'
//               variant='outlined'
//               value={searchQuery}
//               onChange={e => setSearchQuery(e.target.value)}
//               sx={{ mr: 2, border: '1px solid #fff', borderRadius: '4px' }}
//             />
//             <FormControl sx={{ minWidth: 120 , border: '1px solid #fff', borderRadius: '4px'}}>
//               <InputLabel>Platform</InputLabel>
//               <Select value={platform} onChange={e => setPlatform(e.target.value)}>
//                 <MenuItem value='All'>All</MenuItem>
//                 <MenuItem value='PC'>PC</MenuItem>
//                 <MenuItem value='Mobile'>Mobile</MenuItem>
//                 <MenuItem value='Playstation'>Playstation</MenuItem>
//               </Select>
//             </FormControl>
//             <FormControl sx={{ minWidth: 120, ml: 2, color: 'white', border: '1px solid #fff', borderRadius: '4px' }}>
//               <InputLabel>Sort By</InputLabel>
//               <Select value={sortBy} onChange={e => setSortBy(e.target.value)}>
//                 <MenuItem value='none'>None</MenuItem>
//                 <MenuItem value='prize-high'>Prize: High to Low</MenuItem>
//                 <MenuItem value='prize-low'>Prize: Low to High</MenuItem>
//                 <MenuItem value='fee-high'>Fee: High to Low</MenuItem>
//                 <MenuItem value='fee-low'>Fee: Low to High</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//           <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} >
//             <Tab label='Open' value='Open' />
//             <Tab label='Closed' value='Closed' />
//             <Tab label='All' value='All' />
//           </Tabs>
//         </Box>
//         <Grid container spacing={3}>
//           {filteredTournaments.map((tournament, index) => (
//             <Grid key={index} item xs={12}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   borderRadius: '12px',
//                   padding: '16px',
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center'
//                 }}
//               >
//                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                   <Avatar
//                     sx={{
//                       width: 32,
//                       height: 32,
//                       backgroundColor: '#1976D2'
//                       // Set a background color for the avatar
//                     }}
//                   >
//                     {getAvatarInitial(tournament.organizer)}
//                   </Avatar>
//                   <Box>
//                     <Typography variant='h6'>{tournament.name}</Typography>
//                     <Typography>
//                       <span role='img' aria-label='Prize'>
//                         🏆
//                       </span>{' '}
//                       Prize: {tournament.prize}
//                       &nbsp;|&nbsp;
//                       <span role='img' aria-label='Fee'>
//                         💰
//                       </span>{' '}
//                       Fee: {tournament.fee}
//                     </Typography>
//                     <Typography>Organized by {tournament.organizer}</Typography>
//                   </Box>
//                 </Box>
//                 <Typography variant='body2' color='textSecondary'>
//                   {tournament.participants} joined out of {tournament.totalParticipants}
//                 </Typography>
//                 <Typography variant='body2' color='textSecondary'>
//                   Status: {tournament.status}
//                 </Typography>
//                 <Link href='/room'>
//                   <Button variant='contained' color='primary'>
//                     Register
//                   </Button>
//                 </Link>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Footer />
//     </Box>
//   )
// }

// TournamentList.getLayout = page => <BlankLayout>{page}</BlankLayout>

// export default TournamentList


import React, { useState } from 'react';
import { Card, CardContent, Button, Typography, Grid, Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import Navbar from 'src/views/homeView/navbar';
import Footer from 'src/views/homeView/footer';
// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Link from 'next/link';

const TournamentList = () => {
  const [open, setOpen] = useState(false);
  const [bankDetails, setBankDetails] = useState({
    accountNumber: '',
    routingNumber: '',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSubmit = () => {
    // Here you can implement the logic to process the bank details and complete the purchase
    console.log('Bank details submitted:', bankDetails);
    setOpen(false);
  };

  const coinItems = [
    {  image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    { image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },
    {  image: 'data:image/jpeg;base64,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' },
    {  image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    {  image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },
    {  image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    {  image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    {  image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },
    {  image: 'data:image/jpeg;base64,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' },
    {  image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
    {  image: 'https://dl.dir.freefiremobile.com/common/web_event/official2.ff.garena.all/202210/aa959aa3d8790d3a44f7f20f16adfa01.jpg' },
    {  image: 'https://wallpapercave.com/wp/hx8Fel1.jpg' },
  ];



  return (
    <Box sx={{ flexGrow: 1, bgcolor: '#000', marginTop: '90px' }}>
      <Navbar />
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {coinItems.map((item, index) => (
          <Grid key={index} item xs={12} sm={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card sx={{ width: '85%', bgcolor: '#000', border: '1px solid #333' }}>
              <CardContent>

                <img src={item.image}  style={{ maxWidth: '100%', marginTop: 16 }} />
                <Link href="/gameDescrption">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: 16 }}
                  >
                    Play Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Footer />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Fill Bank Details</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name of Card Holder"
            name="accountNumber"
            value={bankDetails.accountNumber}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Card Number"
            name="routingNumber"
            value={bankDetails.routingNumber}
            margin="normal"
          />

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}>
            <TextField
              fullWidth
              label="Valid Through"
              name="accountNumber"
              value={bankDetails.accountNumber}
              margin="normal"
            />
            <TextField
              fullWidth
              label="CVV NO."
              name="routingNumber"
              value={bankDetails.routingNumber}
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

TournamentList.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default TournamentList;

