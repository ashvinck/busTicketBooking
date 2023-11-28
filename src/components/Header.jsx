import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Header component
const Header = () => {
  return (
    <AppBar position='static' color='transparent'>
      <Toolbar>
        <ArrowBackIcon />
        <Typography sx={{ px: 2 }}>Bus Travels</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
