import React from 'react';
import { Container, Typography, Button, Grid, Paper, Box } from '@mui/material';

const ContentWithImage = () => {
  return (
    <Box sx={{
      padding: '80px 0',
      height: '120vh',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#000',
      margin: '0',

    }}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          bgcolor: '#000'
        }}>
          <Paper sx={{ padding: 3, bgcolor: '#000' , margin:14}}>
            <Button variant="outlined" color="primary" sx={{
              '&:hover': {
                backgroundColor: '#45f884',
                color: '#000',
              },
            }}>
              Live Gaming
            </Button>
            <Typography variant="h2" sx={{color:'#45f884', fontFamily:'cursive'}}>
              Streaming
            </Typography>
            <Typography variant="body1" paragraph sx={{color:'#fff', fontSize:16}}>
              We provide amazing services and products to enhance your experience.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', bgcolor: '#000'
          }}>
            <img src="https://themedox.com/demo/mykd/assets/img/slider/slider_img01.png" alt="Image" style={{ maxWidth: '500px', maxHeight: '100%' }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContentWithImage;
