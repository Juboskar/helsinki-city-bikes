import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Journey } from '../types';
import dateFormat from 'dateformat';
import { Link } from 'react-router-dom';

export const JourneyCard = ({
  journey,
  link
}: {
  journey: Journey;
  link: boolean;
}) => {
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
          From:{' '}
          <Link
            style={{ textDecoration: 'none' }}
            to={'/stations/' + journey.departure_station_id}
          >
            {journey.departure_station_name}
          </Link>
        </Typography>

        <Typography variant="caption" sx={{ fontSize: 14 }}>
          Time: {dateFormat(journey.departure, 'yyyy-mm-dd h:MM:ss')}
        </Typography>

        <hr />

        <Typography variant="h5" sx={{ fontSize: 18, color: 'darkblue' }}>
          To:{' '}
          <Link
            style={{ textDecoration: 'none' }}
            to={'/stations/' + journey.return_station_id}
          >
            {journey.return_station_name}
          </Link>
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

        {link && <Link to={'/journeys/' + journey._id}>show journey</Link>}
      </CardContent>
    </Card>
  );
};
