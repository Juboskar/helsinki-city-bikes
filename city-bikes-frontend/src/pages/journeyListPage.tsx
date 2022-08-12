import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import journeyService from '../services/journeys';
import { Journey } from '../types';

function JourneyListPage() {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    journeyService
      .getJourneys(1, 10)
      .then((j) => {
        setJourneys(j);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {journeys.map((j) => {
        return (
          <Card
            sx={{ minWidth: 275 }}
            key={j._id}
            style={{ margin: 10, boxShadow: '0 1px 1px 3px green' }}
          >
            <CardContent>
              <Typography sx={{ mb: 1.5 }}>
                From: {j.departure_station_name}
                <br />
                To: {j.return_station_name}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                Covered distance: {j.distance / 1000 + ' km'}
                <br />
                Duration:{' '}
                {Math.floor(j.duration / 60) +
                  ' min ' +
                  ('0' + Math.floor(j.duration % 60)).slice(-2) +
                  ' sec'}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}

export default JourneyListPage;
