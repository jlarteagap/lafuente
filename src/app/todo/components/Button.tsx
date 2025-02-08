'use client'
import React from 'react';
import { useAnalytics } from './AnalyticsContext';
import { Button } from '@mui/material';

const ComponentB: React.FC = () => {
  const { logClick } = useAnalytics();

  return (
    <Button variant="contained" color="primary"  onClick={logClick} style={{ marginTop: '1rem' }}>
      Click Me
    </Button>
  );
};

export default ComponentB;