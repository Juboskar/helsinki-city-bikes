import { Card, CardContent, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import stationService from '../../services/stations';
import { Station } from '../../types';
import { PageInfoCard } from '../../compoents/pageInfoCard';

function StationListPage() {
  const [stations, setStations] = useState<Station[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    stationService
      .getStations(page, 10)
      .then((s) => {
        setStations(s);
      })
      .catch((e) => console.log(e));
  }, [page]);

  return (
    <>
      <h1 style={{ width: '60%', margin: 'auto', color: 'darkblue' }}>
        Stations
      </h1>
      <PageInfoCard page={page} setPage={setPage} />
      {stations.map((s) => (
        <Card
          sx={{ minWidth: 275 }}
          key={s.ID}
          style={{
            width: '60%',
            margin: 'auto',
            marginBottom: 15,
            boxShadow: '0 8px 20px -12px darkblue'
          }}
        >
          <CardContent>
            <Typography variant="h5" sx={{ fontSize: 18, color: 'darkblue' }}>
              Station: {s.Name}
            </Typography>

            <Typography variant="caption" sx={{ fontSize: 14 }}>
              Address: {s.Osoite}
            </Typography>

            <br />

            <Typography variant="caption" sx={{ fontSize: 14 }}>
              Capasity: {s.Kapasiteet}
            </Typography>
          </CardContent>
        </Card>
      ))}
      <PageInfoCard page={page} setPage={setPage} />
    </>
  );
}

export default StationListPage;
