import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2D2D3E' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
