import { Card, CardContent,  Typography } from '@mui/material';
import { Coor } from '@/types/Coor.types';

interface LocationProps {
  coords: Coor;
}
export const Location: React.FC<{location: LocationProps}> = ({location}) => {
    const {latitude, longitude} = location.coords;
  return (
    <Card style={{ marginTop: '20px' }}>
      <CardContent>
        <Typography variant='body1'>Latitude: {latitude}</Typography>
        <Typography variant='body1'>Longitude: {longitude}</Typography>
      </CardContent>
    </Card>
  );
};
