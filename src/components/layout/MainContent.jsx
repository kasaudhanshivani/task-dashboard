import React from 'react';
import { Box, Grid } from '@mui/material';
import AddTask from '../AddTask';
import TaskList from '../TaskList';
import AnalyticsCard from './AnalyticsCard';
import SalesCard from './SalesCard';
import SupportTracker from './SupportTracker';
import './App.css';

const MainContent = () => {
  return (
    <Box sx={{ padding: 3 }}>
      {/* Task Management Section */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <AddTask />
        </Grid>
        <Grid item xs={12} md={6}>
          <TaskList />
        </Grid>
      </Grid>

      {/* Dashboard Analytics Section */}
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} md={4}>
          <AnalyticsCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <SalesCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <SupportTracker />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
