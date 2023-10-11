import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IoPlaySharp, IoChevronForwardSharp, IoChevronBackSharp } from 'react-icons/io5';

export default function CustomCard() {
  const theme = useTheme();

  // Sample data for the cards
  const cardData = [
    {
      title: 'Live From Space 1',
      artist: 'Mac Miller 1',
      imageUrl: 'https://themedox.com/demo/mykd/assets/img/nft/nft_img01.jpg',
    },
    {
      title: 'Live From Space 2',
      artist: 'Mac Miller 2',
      imageUrl: 'https://themedox.com/demo/mykd/assets/img/nft/nft_img02.jpg',
    }, {
      title: 'Live From Space 2',
      artist: 'Mac Miller 2',
      imageUrl: 'https://themedox.com/demo/mykd/assets/img/nft/nft_img03.jpg',
    },
    {
      title: 'Live From Space 2',
      artist: 'Mac Miller 2',
      imageUrl: 'https://themedox.com/demo/mykd/assets/img/nft/nft_img03.jpg',
    },
    {
      title: 'Live From Space 2',
      artist: 'Mac Miller 2',
      imageUrl: 'https://themedox.com/demo/mykd/assets/img/nft/nft_img02.jpg',
    },
    // Add more card data as needed
  ];

  return (
    <Box sx={{
      padding: '80px 0',
      height: '120vh',
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#000',
      margin: '0',
    }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ display: 'flex', margin: '0 10px' , bgcolor:'transparent', border:'.1px solid #333'}}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{color: '#fff',}}>
              {card.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div" sx={{color: '#fff',}}>
              {card.artist}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <Button variant="outlined" sx={{
                bgcolor: "#FFBE18", color: '#fff',
                '&:hover': {
                  backgroundColor: '#45f884',
                  color: '#000',
                  alignItems: 'center',
                },
              }}>
                Live Gaming
              </Button>
            </Box>
          </CardContent>

          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={card.imageUrl}
            alt={`${card.title} album cover`}
          />

        </Card>
      ))}
    </Box>
  );
}
