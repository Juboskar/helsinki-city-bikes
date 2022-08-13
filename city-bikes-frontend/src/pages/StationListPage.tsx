import React, { useEffect, useState } from 'react';
import stationService from '../services/stations';
import { Station } from '../types';
import { PageInfoCard } from '../components/PageInfoCard';
import { StationCard } from '../components/StationCard';
import { Button, Input } from '@mui/material';

function StationListPage() {
  const [stations, setStations] = useState<Station[]>([]);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(false);

  useEffect(() => {
    if (searchResult) return;

    stationService
      .getStations(page, 10)
      .then((s) => {
        setStations(s);
      })
      .catch((e) => console.log(e));
  }, [page, searchResult]);

  const search = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    stationService
      .getStationsByName(searchTerm)
      .then((s) => {
        setStations(s);
        setSearchTerm('');
        setSearchResult(true);
      })
      .catch((e) => console.log(e));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <h1 style={{ width: '60%', margin: 'auto', color: 'darkblue' }}>
        Stations
      </h1>
      <form onSubmit={search} style={{ width: '60%', margin: 'auto' }}>
        <Input
          onChange={handleChange}
          value={searchTerm}
          name="q"
          style={{ background: 'white' }}
        />{' '}
        <Button type="submit">Search</Button>
      </form>

      {!searchResult && <PageInfoCard page={page} setPage={setPage} />}

      {searchResult && (
        <Button
          style={{ width: '60%', margin: 'auto' }}
          onClick={() => {
            setSearchResult(false);
          }}
        >
          Back to station list
        </Button>
      )}

      {stations.map((s) => (
        <StationCard key={s.ID} station={s} link={true} />
      ))}
      {!searchResult && <PageInfoCard page={page} setPage={setPage} />}
    </>
  );
}

export default StationListPage;
