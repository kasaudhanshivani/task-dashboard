import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SalesCard = () => {
  return (
    <Card sx={{ backgroundColor: '#1E1E2F', color: 'white', mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Average Daily Sales
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          $28,450
        </Typography>
        <Typography variant="body2">This Month</Typography>
      </CardContent>
    </Card>
  );
};

export default SalesCard;
