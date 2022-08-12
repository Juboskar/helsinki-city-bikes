import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Journey } from '../types';
import dateFormat from 'dateformat';

export const JourneyCard = ({ journey }: { journey: Journey }) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        width: '60%',
        margin: 'auto',
        marginBottom: 15,
        boxShadow: '0 8px 20px -12px darkblue'
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ fontSize: 18, color: 'darkblue' }}>
          From: {journey.departure_station_name}
        </Typography>

        <Typography variant="caption" sx={{ fontSize: 14 }}>
          Time: {dateFormat(journey.departure, 'yyyy-mm-dd h:MM:ss')}
        </Typography>

        <hr />

        <Typography variant="h5" sx={{ fontSize: 18, color: 'darkblue' }}>
          To: {journey.return_station_name}
        </Typography>

        <Typography variant="caption" sx={{ fontSize: 14 }}>
          Time: {dateFormat(journey.return, 'yyyy-mm-dd h:MM:ss')}
        </Typography>

        <hr />
        <Typography variant="inherit" sx={{ fontSize: 14 }}>
          Covered distance: {journey.distance / 1000 + ' km'}
          <br />
          Duration:{' '}
          {Math.floor(journey.duration / 60) +
            ' min ' +
            ('0' + Math.floor(journey.duration % 60)).slice(-2) +
            ' sec'}
        </Typography>
      </CardContent>
    </Card>
  );
};
