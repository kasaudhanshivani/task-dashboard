import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Assessment';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Analytics', icon: <AnalyticsIcon /> },
    { text: 'Email', icon: <EmailIcon /> },
    { text: 'Chat', icon: <ChatIcon /> },
  ];

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        backgroundColor: '#1E1E2F',
        color: 'white',
        padding: 2,
      }}
    >
      <Typography variant="h6" sx={{ textAlign: 'center', marginBottom: 3 }}>
        Task Dashboard
      </Typography>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
