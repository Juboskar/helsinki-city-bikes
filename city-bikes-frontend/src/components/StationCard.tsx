import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Station } from '../types';

export const StationCard = ({ station }: { station: Station }) => {
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
      </CardContent>
    </Card>
  );
};
