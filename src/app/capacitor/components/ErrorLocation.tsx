import { Card, Typography } from '@mui/material';

export const ErrorLocation: React.FC<{ message: string }> = ({ message }) => (
    <Card style={{ marginTop: '20px', color: 'red' }}>
      <Typography variant="h2">Error:</Typography>
      <Typography variant="body1">{message}</Typography>
    </Card>
  );