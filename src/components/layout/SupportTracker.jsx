import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';

const SupportTracker = () => {
  return (
    <Card sx={{ backgroundColor: '#1E1E2F', color: 'white', mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Support Tracker
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Box>
            <Typography variant="subtitle2">New Tickets</Typography>
            <Typography variant="h6">142</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">Open Tickets</Typography>
            <Typography variant="h6">28</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">Response Time</Typography>
            <Typography variant="h6">1 Day</Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" gutterBottom>
            Completed Tasks
          </Typography>
          <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4 }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default SupportTracker;
