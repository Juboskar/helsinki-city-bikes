import React, { useEffect, useState } from 'react';
import stationService from '../services/stations';
import { Station } from '../types';
import { PageInfoCard } from '../components/PageInfoCard';
import { StationCard } from '../components/StationCard';

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
        <StationCard key={s.ID} station={s} />
      ))}
      <PageInfoCard page={page} setPage={setPage} />
    </>
  );
}

export default StationListPage;
