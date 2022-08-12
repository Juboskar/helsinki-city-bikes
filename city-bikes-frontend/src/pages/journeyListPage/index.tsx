import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import journeyService from '../../services/journeys';
import { Journey } from '../../types';
import dateFormat from 'dateformat';
import { PageInfoCard } from './pageInfoCard';

function JourneyListPage() {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    journeyService
      .getJourneys(page, 10)
      .then((j) => {
        setJourneys(j);
      })
      .catch((e) => console.log(e));
  }, [page]);

  return (
    <>
      <PageInfoCard page={page} setPage={setPage} />
      {journeys.map((j) => (
        <Card
          sx={{ minWidth: 275 }}
          key={j._id}
          style={{
            width: '60%',
            margin: 'auto',
            marginBottom: 15,
            boxShadow: '0 8px 20px -12px darkblue'
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontSize: 18, color: 'darkblue' }}>
              From: {j.departure_station_name}
            </Typography>

            <Typography variant="caption" sx={{ fontSize: 14 }}>
              Time: {dateFormat(j.departure, 'yyyy-mm-dd h:MM:ss')}
            </Typography>

            <hr />

            <Typography variant="h5" sx={{ fontSize: 18, color: 'darkblue' }}>
              To: {j.return_station_name}
            </Typography>

            <Typography variant="caption" sx={{ fontSize: 14 }}>
              Time: {dateFormat(j.return, 'yyyy-mm-dd h:MM:ss')}
            </Typography>

            <hr />
            <Typography variant="inherit" sx={{ fontSize: 14 }}>
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
      ))}
      <PageInfoCard page={page} setPage={setPage} />
    </>
  );
}

export default JourneyListPage;
