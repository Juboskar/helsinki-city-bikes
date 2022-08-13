import React, { useEffect, useState } from 'react';
import stationService from '../services/stations';
import { Station } from '../types';
import { PageInfoCard } from '../components/PageInfoCard';
import { StationCard } from '../components/StationCard';
import { Button, Input, Typography } from '@mui/material';

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
      <div
        style={{
          minWidth: 400,
          width: '60%',
          margin: 'auto',
          color: 'darkblue'
        }}
      >
        <h1
          style={{
            color: 'darkblue'
          }}
        >
          Stations
        </h1>
        <form onSubmit={search}>
          <Input
            onChange={handleChange}
            value={searchTerm}
            style={{ background: 'white' }}
          />{' '}
          <Button type="submit">Search</Button>
        </form>
      </div>

      {!searchResult && <PageInfoCard page={page} setPage={setPage} />}

      {searchResult && (
        <div style={{ width: '60%', margin: 'auto', maxWidth: 400 }}>
          <Typography variant="caption">
            Showing maximum of first 10 matching results
          </Typography>
          <Button
            onClick={() => {
              setSearchResult(false);
            }}
          >
            Back to station list
          </Button>
        </div>
      )}

      {stations.map((s) => (
        <StationCard key={s.ID} station={s} link={true} />
      ))}
      {!searchResult && <PageInfoCard page={page} setPage={setPage} />}
    </>
  );
}

export default StationListPage;
