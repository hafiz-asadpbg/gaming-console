import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { IoWalletSharp } from 'react-icons/io5';
import Link from 'next/link';
import { Avatar, Divider } from '@mui/material';




const Navbar = () => {

  const balance = ['Deposite', 'Withdraw']

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElBalance, setAnchorElBalance] = React.useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenUserMenuBalance = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElBalance(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setAnchorElBalance(null);

  };
  return (
    <AppBar sx={{
      backgroundColor: '#000000',
      color: '#ffffff',
      boxShadow: 'none',
      borderBottom: '1px solid #45f884',
      padding: '10px 80px',
      height: '80px',
      position: 'stscicky',
    }}>
      <Toolbar>

        <Typography variant="h3" component="div" sx={{ flexGrow: 6, color: '#45f884', fontFamily: 'cursive' }}>
          T<span style={{ color: '#fff' }}>our</span>nafest
        </Typography>
        {/* <Link href='/organizer/page'>
          <Button color="inherit" sx={{
            color: '#fff', fontSize: '1.2rem', fontWeight: '300',
            '&:hover': {
              color: '#45f884',
            },
          }}>
            organize
          </Button>
        </Link> */}
        <Link href='/'>
          <Button color="inherit" sx={{
            color: '#fff', fontSize: '1.2rem', fontWeight: '300',
            '&:hover': {
              color: '#45f884',
            },
          }}>
            Home
          </Button>
        </Link>
        <Link href='/game/page' >
          <Button color="inherit" sx={{
            color: '#fff', fontSize: '1.2rem', fontWeight: '300',
            '&:hover': {
              color: '#45f884',
            },
          }}>
            Games
          </Button>
        </Link>
        <Link href='/coin'>
          <Button color="inherit" sx={{
            color: '#fff', fontSize: '1.2rem', fontWeight: '300',
            '&:hover': {
              color: '#45f884',
            },
          }}>
            Coin Shop
          </Button>
        </Link>
        <Link href='/auth' >
          <Button color="inherit" sx={{
            color: '#fff', fontSize: '1.2rem', fontWeight: '300',
            '&:hover': {
              color: '#45f884',
            },
          }}>
            Login
          </Button>
        </Link>

        <Link href='/coin'>
          <Button color="inherit" onClick={handleOpenUserMenuBalance} sx={{
            color: '#fff', fontSize: '1.2rem', fontWeight: '300', border: '1px solid #45f884', fontFamily: 'cursive',
            '&:hover': {
              color: '#000',
              backgroundColor: '#45f884',
              border: '1px solid #45f884',
            },
          }}>
            <IoWalletSharp />
            : 2000
          </Button>
        </Link>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Account settings">
            <Button color="inherit" onClick={handleOpenUserMenu} sx={{
              color: '#fff', fontSize: '1.2rem', fontWeight: '300',
              '&:hover': {
                color: '#45f884',
              },
            }}>
              <Avatar
                alt="Remy Sharp"
                src="\images\avatars\1.png"
                sx={{ width: 40, height: 40 }}
              />
            </Button>
          </Tooltip>
          <Menu
            sx={{ mt: '45px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Box sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
              }}>
              <Avatar
                alt="Remy Sharp"
                src="\images\avatars\1.png"
                sx={{ width: 40, height: 40 }}
              />
              <Typography>
                john deo
              </Typography>
              </Box>
            </MenuItem>
            <Divider/>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link href='/user-account-settings'>
                <Typography textAlign="center">Account Settings</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link href='/ResultsPage'>
                <Typography textAlign="center">Tournaments</Typography>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link href='/'>
                <Typography textAlign="center">Logout</Typography>
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
