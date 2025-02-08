'use client'

import React from 'react';

import { useAnalytics } from './AnalyticsContext';
import { Card, Typography } from '@mui/material';
const AnalyticsPanel: React.FC = () => {
  const { hoverEvents, clicks } = useAnalytics();

  return (
    <Card style={{ padding: '1rem', margin: '1rem' }}>
      <Typography variant='h3'>Analytics Dashboard</Typography>
      <Typography variant='body1'>Hover Events: {hoverEvents}</Typography>
      <Typography variant='body1'>Clicks: {clicks}</Typography>
    </Card>
  );
};

export default AnalyticsPanel;