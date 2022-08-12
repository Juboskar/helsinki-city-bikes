import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Station } from '../types';
import { Link } from 'react-router-dom';

export const StationCard = ({
  station,
  link
}: {
  station: Station;
  link: boolean;
}) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      key={station.ID}
      style={{
        width: '60%',
        margin: 'auto',
        marginBottom: 15,
        boxShadow: '0 8px 20px -12px darkblue'
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontSize: 18, color: 'darkblue' }}>
          Station: {station.Name}
        </Typography>

        <Typography variant="caption" sx={{ fontSize: 14 }}>
          Address: {station.Osoite}
        </Typography>

        <br />

        <Typography variant="caption" sx={{ fontSize: 14 }}>
          Capasity: {station.Kapasiteet}
        </Typography>

        <br />

        {link && <Link to={'/stations/' + station.ID}>show station</Link>}
      </CardContent>
    </Card>
  );
};
