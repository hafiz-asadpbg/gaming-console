import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import Navbar from 'src/views/homeView/navbar';
import Header from 'src/views/homeView/header';
import Card from 'src/views/homeView/card';
import PictureGallery from 'src/views/homeView/gallery';
import ImgMediaCard from 'src/views/homeView/players';
import Footer from 'src/views/homeView/footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Typography variant="h3" component="h2" sx={{
        color: '#45f884',
        fontFamily: 'cursive',
        textAlign: 'center',
        bgcolor: '#000'
      }}>
        Our Gaming Gallery
      </Typography>
      <Typography variant="h5" component="h2" sx={{
        color: '#fff',
        fontFamily: 'cursive',
        textAlign: 'center',
        bgcolor: '#000'
      }}>
        Here is a chance to Play with us and Enjoy the gaming life!
      </Typography>
      <PictureGallery />
      <Typography variant="h3" component="h2" sx={{
        color: '#45f884',
        fontFamily: 'cursive',
        textAlign: 'center',
        bgcolor: '#000'
      }}>
        Our Players
      </Typography>
      <Typography variant="h5" component="h2" sx={{
        color: '#fff',
        fontFamily: 'cursive',
        textAlign: 'center',
        bgcolor: '#000'
      }}>
        Here is a chance to Play with Experiance and Enjoy the gaming life!
      </Typography>
      <ImgMediaCard />
      <Footer />
    </>
  );
};

export default HomePage;
