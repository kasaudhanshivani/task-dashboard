import React from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ width: '100%' }}>
        <Header />
        <MainContent />
      </Box>
    </Box>
  );
}

export default App;
