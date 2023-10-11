import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const GameOverview = () => {
  return (
    <Box p={2}>
      {/* 1st Row */}
      <Box mb={2}>
        <Card>
          <CardContent>
            <Typography variant="h4" sx={{ borderBottom: '.1px solid #333' }}>
              Tournament Name
            </Typography>
            <Typography variant="h6" color="textSecondary">
              Description
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad
              consequatur quos delectus ex in officia quia molestias quasi hic.
              Quam sit similique tempora reprehenderit aut corporis eius autem
              enim? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, esse temporibus commodi corrupti doloribus culpa
              suscipit vero veritatis dolorem debitis sequi vel recusandae,
              alias consectetur deleniti hic laboriosam illum laudantium.
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* 2nd Row */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderLeft: '4px solid #45f884' }}>
            <CardContent>
              <Typography variant="h6">Price</Typography>
              <Typography variant="body2" color="textSecondary">
                $50
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderLeft: '4px solid #45f884' }}>
            <CardContent>
              <Typography variant="h6">Fee</Typography>
              <Typography variant="body2" color="textSecondary">
                $10
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ borderLeft: '4px solid #45f884' }}>
            <CardContent>
              <Typography variant="h6">Timing</Typography>
              <Typography variant="body2" color="textSecondary">
                12:00 PM
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* 3rd Row */}
      <Box mb={2}>
        <Card>
          <CardContent>
            <Typography variant="h4">Participants</Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <Typography variant="h6" color="textSecondary">
                  Total Participants
                </Typography>
                <Typography variant="h3">100</Typography>
              </div>
              <div>
                <Typography variant="h6" color="textSecondary">
                  Registered Participants
                </Typography>
                <Typography variant="h3">50</Typography>
              </div>
              <div>
                <Button variant="contained" color="primary">
                  Registration Close
                </Button>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* 4th Row */}
      <Box mb={2}>
        <Card>
          <CardContent>
            <Typography variant="h4">Winner</Typography>
            <Typography variant="body2" color="textSecondary">
              Sample Name
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Publish Button */}
      <Box mt={2}>
        <Button variant="contained" color="primary">
          Publish
        </Button>
      </Box>
    </Box>
  );
};

export default GameOverview;



// import React, { useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { Box, Button } from '@mui/material';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import FormControl from '@mui/material/FormControl';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import TextField from '@mui/material/TextField';
// import TabContext from '@mui/lab/TabContext';
// import TabPanel from '@mui/lab/TabPanel';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// const GameOverview = () => {
//   // Sample data for game cards
//   const games = [
//     {
//       id: 1,
//       name: 'Game 1',
//       description: 'Description for Game 1',
//     },
//     {
//       id: 2,
//       name: 'participants',
//       btn: 'Configure Check-in',
//       description:
//         'You can manually create participants, especially if you do not use the registration. You may configure the check-in either way.',
//     },
//     {
//       id: 3,
//       name: 'Structure',
//       btn: 'Create New Stage',
//       description:
//         'The tournament does not have any stage yet. You should create the first stage and may use our Structure Guide if you are not sure of which stage to create.',
//     },
//     {
//       id: 4,
//       name: 'Registration',
//       description:
//         'Enable the registration to have participants register to the tournament. They will enjoy all the participant features the platform offers: check-in, matches list, results report ...',
//       btn: 'Enable Register',
//     },
//   ];

//   // State to manage the dialog
//   const [openDialog, setOpenDialog] = useState(false);
//   const [openDialogParticipant, setOpenDialogParticipant] = useState(false);
//   const [currentTab, setCurrentTab] = useState('active');

//   const handleOpenDialog = () => {
//     setOpenDialog(true);
//   };

//   const handleOpenDialogParticipant = () => {
//     setOpenDialogParticipant(true);
//   }

//   const handleCloseDialog = () => {
//     setOpenDialog(false);
//     setOpenDialogParticipant(false);

//   };

//   const handleTabChange = (event, newValue) => {
//     setCurrentTab(newValue);
//   };

//   return (
//     <>
//       <Card>
//         <CardContent>
//           <Typography
//             variant="h6"
//             sx={{
//               borderBottom: '.1px solid #333',
//               padding: '1rem',
//             }}
//           >
//             Game 1
//           </Typography>
//           <Typography variant="body2" color="textSecondary" >
//             Description for Game 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ad consequatur quos delectus ex in officia quia molestias quasi hic. Quam sit similique tempora reprehenderit aut corporis eius autem enim? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, esse temporibus commodi corrupti doloribus culpa suscipit vero veritatis dolorem debitis sequi vel recusandae, alias consectetur deleniti hic laboriosam illum laudantium.
//           </Typography>
//         </CardContent>
//       </Card>
//       <Box sx={{
//         display: 'flex',
//         justifyContent: 'space-evenly',
//         alignItems: 'center',
//         margin: '10px'
//       }}>
//         <Card sx={{
//           width: '400px',
//           backgroundColor: '#45f884'

//         }}>
//           <CardContent>
//             <Typography
//               variant="h6"
//               sx={{
//                 borderBottom: '.1px solid #333',
//                 padding: '.5rem',
//               }}
//             >
//               price
//             </Typography>
//             <Typography variant="h5" color="textSecondary" >
//               121
//             </Typography>
//           </CardContent>
//         </Card>
//         <Card sx={{
//           width: '400px',
//           backgroundColor: '#45f884'

//         }}>          <CardContent>
//             <Typography
//               variant="h6"
//               sx={{
//                 borderBottom: '.1px solid #333',
//                 padding: '.5rem',
//               }}
//             >
//               Fee
//             </Typography>
//             <Typography variant="h5" color="textSecondary" >
//               12            </Typography>
//           </CardContent>
//         </Card>
//         <Card sx={{
//           width: '400px',
//           backgroundColor: '#45f884'
//         }}>          <CardContent>
//             <Typography
//               variant="h6"
//               sx={{
//                 borderBottom: '.1px solid #333',
//                 padding: '.5rem',
//               }}
//             >
//               Timing
//             </Typography>
//             <Typography variant="h5" color="textSecondary" >
//               12:12            </Typography>
//           </CardContent>
//         </Card>
//       </Box>
//       <Box sx={{
//         display: 'flex',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         height: '200px'
//       }}>
//         <Typography variant="h2" color="textSecondary" >
//           Register Amount
//         </Typography>
//         <Typography variant="h1" color="textSecondary" >
//           |
//         </Typography>
//         <Box sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'end',
//           alignItems: 'end'
//         }}>

//           <Typography variant="h2" color="textSecondary" >
//             Total Players

//           </Typography>
//           <Button variant="contained" >
//             Close Registration
//           </Button>
//         </Box>
//       </Box>
//       <Card>
//         <CardContent sx={{
//           display: 'flex',
//           justifyContent: 'space-evenly',
//           alignItems: 'center',
//           margin: '10px'
//         }}>
//           <Box>
//             <Typography variant="h6" color="textSecondary" >
//               Winner : None
//             </Typography>
//           </Box>
//           <Box>
//             <Button variant="contained">
//               Published
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>

//     </>
    // <div>
    //   <Box
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       padding: '1rem',
    //     }}
    //   >
    //     <Typography variant="h6" gutterBottom>
    //       Overview
    //     </Typography>

    //     <Button variant="contained" color="primary">
    //       Public
    //     </Button>
    //   </Box>

    //   <Grid container spacing={2} marginTop={2} sx={{ padding: '1rem' }}>
    //     <Grid item xs={12} sm={12}>
    //       <Card>
    //         <CardContent>
    //           <Typography
    //             variant="h6"
    //             sx={{
    //               borderBottom: '.1px solid #333',
    //               padding: '.5rem',
    //             }}
    //           >
    //             Game 1
    //           </Typography>
    //           <Typography variant="body2" color="textSecondary">
    //             Description for Game 1
    //           </Typography>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>
    //   <Grid container spacing={2} marginTop={2} sx={{ padding: '1rem' }}>
    //     <Grid item xs={12} sm={12}>
    //       <Card>
    //         <CardContent>
    //           <Typography
    //             variant="h6"
    //             sx={{
    //               borderBottom: '.1px solid #333',
    //               padding: '.5rem',
    //             }}
    //           >
    //             Participants
    //           </Typography>
    //           <Typography variant="body2" color="textSecondary">
    //             You can manually create participants, especially if you do not use the registration. You may configure the check-in either way.',
    //           </Typography>
    //           <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
    //             <Button
    //               variant="outlined"
    //               color="primary"
    //               onClick={handleOpenDialogParticipant}
    //             >
    //               Configure Check-in
    //             </Button>
    //           </Box>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>

    //   {/* stage */}
    //   <Grid container spacing={2} marginTop={2} sx={{ padding: '1rem' }}>
    //     <Grid item xs={12} sm={12}>
    //       <Card>
    //         <CardContent>
    //           <Typography
    //             variant="h6"
    //             sx={{
    //               borderBottom: '.1px solid #333',
    //               padding: '.5rem',
    //             }}
    //           >
    //             Structure
    //           </Typography>
    //           <Typography variant="body2" color="textSecondary">
    //             The tournament does not have any stage yet. You should create the first stage and may use our Structure Guide if you are not sure of which stage to create.',
    //           </Typography>
    //           <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
    //             <Button
    //               variant="outlined"
    //               color="primary"
    //               onClick={handleOpenDialog}
    //             >
    //               Create New Stage
    //             </Button>
    //           </Box>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>

    //   {/* register */}
    //   <Grid container spacing={2} marginTop={2} sx={{ padding: '1rem' }}>
    //     <Grid item xs={12} sm={12}>
    //       <Card>
    //         <CardContent>
    //           <Typography
    //             variant="h6"
    //             sx={{
    //               borderBottom: '.1px solid #333',
    //               padding: '.5rem',
    //             }}
    //           >
    //             Registration
    //           </Typography>
    //           <Typography variant="body2" color="textSecondary">
    //             Enable the registration to have participants register to the tournament. They will enjoy all the participant features the platform offers: check-in, matches list, results report ...',
    //           </Typography>
    //           <Box sx={{ marginTop: '1rem', textAlign: 'center' }}>
    //             <Button
    //               variant="outlined"
    //               color="primary"
    //               onClick={handleOpenDialog}
    //             >
    //               Enable Register
    //             </Button>
    //           </Box>
    //         </CardContent>
    //       </Card>
    //     </Grid>
    //   </Grid>


    //   <Dialog fullWidth open={openDialog} onClose={handleCloseDialog}>
    //     <DialogTitle>Configure Check-in</DialogTitle>
    //     <DialogContent>
    //       <TabContext value={currentTab}>
    //         <Tabs
    //           value={currentTab}
    //           onChange={handleTabChange}
    //           variant="fullWidth"
    //           indicatorColor="primary"
    //           textColor="primary"
    //           aria-label="Configuration Tabs"
    //         >
    //           <Tab label="Active Tab" value="active" />
    //           <Tab label="Options" value="options" />
    //           <Tab label="Customize" value="customize" />
    //         </Tabs>

    //         <TabPanel value="active">
    //           {/* Content for the "Active Tab" */}
    //           <FormControl component="fieldset">
    //             <Typography variant="subtitle1">Enable Participant</Typography>
    //             <RadioGroup
    //               sx={{
    //                 display: 'flex',
    //                 flexDirection: 'row',
    //                 justifyContent: 'space-between',
    //                 alignItems: 'center',
    //               }}
    //             >
    //               <FormControlLabel
    //                 value="Yes"
    //                 control={<Radio />}
    //                 label="Yes"
    //               />
    //               <FormControlLabel
    //                 value="No"
    //                 control={<Radio />}
    //                 label="NO"
    //               />

    //             </RadioGroup>
    //           </FormControl>
    //           <Box sx={{
    //             display: 'flex',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //             <TextField
    //               label="Check-in Opening"
    //               variant="outlined"
    //               fullWidth
    //               margin="normal"
    //             />
    //             <TextField
    //               label="Ex: 10:03"
    //               variant="outlined"
    //               margin="normal"
    //             />
    //           </Box>
    //           <Box sx={{
    //             display: 'flex',
    //             justifyContent: 'space-between',
    //             alignItems: 'center',
    //           }}>
    //             <TextField
    //               label="Check-in Opening"
    //               variant="outlined"
    //               fullWidth
    //               margin="normal"
    //             />
    //             <TextField
    //               label="Ex: 10:03"
    //               variant="outlined"
    //               margin="normal"
    //             />
    //           </Box>
    //         </TabPanel>

    //         <TabPanel value="options">
    //           <Box sx={{
    //             display: 'flex',
    //             flexDirection: 'column',
    //           }}>

    //             <FormControl component="fieldset">
    //               <Typography variant="subtitle1">Accept Registration Automaticlly</Typography>
    //               <RadioGroup
    //                 sx={{
    //                   display: 'flex',
    //                   flexDirection: 'row',
    //                   alignItems: 'center',
    //                 }}
    //               >
    //                 <FormControlLabel
    //                   value="Yes"
    //                   control={<Radio />}
    //                   label="Yes"
    //                 />
    //                 <FormControlLabel
    //                   value="No"
    //                   control={<Radio />}
    //                   label="NO"
    //                 />

    //               </RadioGroup>
    //             </FormControl>
    //             <FormControl component="fieldset">
    //               <Typography variant="subtitle1">Enable Organizer Email Notification? </Typography>
    //               <RadioGroup
    //                 sx={{
    //                   display: 'flex',
    //                   flexDirection: 'row',
    //                   alignItems: 'center',
    //                 }}
    //               >
    //                 <FormControlLabel
    //                   value="Yes"
    //                   control={<Radio />}
    //                   label="Yes"
    //                 />
    //                 <FormControlLabel
    //                   value="No"
    //                   control={<Radio />}
    //                   label="NO"
    //                 />
    //               </RadioGroup>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>

    //         <TabPanel value="customize">
    //           <TextField
    //             label="Form Message"
    //             variant="outlined"
    //             fullWidth
    //             margin="normal"
    //             multiline
    //             rows={4}
    //           />
    //           <TextField
    //             label="Validation Message"
    //             variant="outlined"
    //             fullWidth
    //             margin="normal"
    //             multiline
    //             rows={4}
    //           />
    //           <TextField
    //             label="Refusal Message"
    //             variant="outlined"
    //             fullWidth
    //             margin="normal"
    //             multiline
    //             rows={4}
    //           />
    //           <Box sx={{
    //             display: 'flex'
    //           }}>
    //             <FormControl component="fieldset">
    //               <Typography variant="subtitle1">Enable Organizer Email Notification? </Typography>
    //               <RadioGroup
    //                 sx={{
    //                   display: 'flex',
    //                   flexDirection: 'row',
    //                   alignItems: 'center',
    //                 }}
    //               >
    //                 <FormControlLabel
    //                   value="Yes"
    //                   control={<Radio />}
    //                   label="Yes"
    //                 />
    //                 <FormControlLabel
    //                   value="No"
    //                   control={<Radio />}
    //                   label="NO"
    //                 />
    //               </RadioGroup>
    //             </FormControl>
    //             <TextField
    //               label="Regular URLs"
    //               variant="outlined"
    //               fullWidth
    //               margin="normal"

    //             />
    //           </Box>
    //         </TabPanel>
    //       </TabContext>
    //     </DialogContent>
    //     <DialogActions>
    //       <Button onClick={handleCloseDialog}>Cancel</Button>
    //       <Button variant="contained" color="primary" onClick={handleCloseDialog}>
    //         Create
    //       </Button>
    //     </DialogActions>
    //   </Dialog>

    //   <Dialog fullWidth open={openDialogParticipant} onClose={handleCloseDialog}>
    //     <DialogTitle>Configure Check-in</DialogTitle>
    //     <DialogContent>
    //       <FormControl component="fieldset">
    //         <Typography variant="subtitle1">Participant</Typography>
    //         <RadioGroup sx={{
    //           display: 'flex',
    //           flexDirection: 'row',
    //           justifyContent: 'space-between',
    //           alignItems: 'center',

    //         }}>
    //           <FormControlLabel
    //             value="participant"
    //             control={<Radio />}
    //             label="Participant"
    //           />
    //           <FormControlLabel
    //             value="organizer"
    //             control={<Radio />}
    //             label="Organizer"
    //           />
    //           <FormControlLabel
    //             value="none"
    //             control={<Radio />}
    //             label="None"
    //           />
    //         </RadioGroup>
    //       </FormControl>
    //       <Box sx={{
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //       }}>

    //         <TextField
    //           label="Check-in Opening"
    //           variant="outlined"
    //           fullWidth
    //           margin="normal"
    //         />
    //         <TextField
    //           label="Ex: 10:03"
    //           variant="outlined"
    //           margin="normal"
    //         />
    //       </Box>  <Box sx={{
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //       }}>

    //         <TextField
    //           label="Check-in Opening"
    //           variant="outlined"
    //           fullWidth
    //           margin="normal"
    //         />
    //         <TextField
    //           label="Ex: 10:03"
    //           variant="outlined"
    //           margin="normal"
    //         />
    //       </Box>


    //       <FormControl component="fieldset">
    //         <Typography variant="subtitle1">Type of Participant</Typography>
    //         <RadioGroup>
    //           <FormControlLabel
    //             value="player"
    //             control={<Radio />}
    //             label="Player"
    //           />
    //           <FormControlLabel
    //             value="team"
    //             control={<Radio />}
    //             label="Team"
    //           />
    //         </RadioGroup>
    //       </FormControl>
    //     </DialogContent>
    //     <DialogActions>
    //       <Button onClick={handleCloseDialog}>Cancel</Button>
    //       <Button variant="contained" color="primary" onClick={handleCloseDialog}>
    //         Create
    //       </Button>
    //     </DialogActions>
    //   </Dialog>
    // </div>
//   );
// };

// export default GameOverview;
