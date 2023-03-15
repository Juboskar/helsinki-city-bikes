import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Station } from '../types';
import { Link } from 'react-router-dom';

export const StationCard = ({
  station,
  link,
  departures,
  returns,
  showMap
}: {
  station: Station;
  link?: boolean;
  departures?: number;
  returns?: number;
  showMap?: boolean;
}) => {
  return (
    <Card
      sx={{ minWidth: 400 }}
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
          {station.name_fi}
        </Typography>
        <Typography variant="caption" sx={{ fontSize: 14, color: 'darkblue' }}>
          {station.name_sv} {'\u2022'} {station.name_en}
        </Typography>

        <br />
        <Typography variant="caption" sx={{ fontSize: 14 }}>
          Address: {station.address}
        </Typography>
        <br />
        <Typography variant="caption" sx={{ fontSize: 14 }}>
          Capasity: {station.capasity}
        </Typography>
        <br />
        {departures && (
          <Typography variant="caption" sx={{ fontSize: 14 }}>
            Departures from station: {departures}
          </Typography>
        )}
        <br />
        {returns && (
          <Typography variant="caption" sx={{ fontSize: 14 }}>
            Returns to station: {returns}
          </Typography>
        )}
        {link && <Link to={'/stations/' + station.ID}>show station</Link>}
        <br />

        {showMap && (
          <iframe
            width="100%"
            height="400"
            src={`https://maps.google.com/maps?q=
            ${station.y.toFixed(7)},${station.x.toFixed(7)}
            &z=15&output=embed`}
          ></iframe>
        )}
      </CardContent>
    </Card>
  );
};
