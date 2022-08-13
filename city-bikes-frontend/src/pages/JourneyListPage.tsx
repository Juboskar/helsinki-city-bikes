import React, { useEffect, useState } from 'react';
import journeyService from '../services/journeys';
import { Journey } from '../types';
import { PageInfoCard } from '../components/PageInfoCard';
import { JourneyCard } from '../components/JourneyCard';
import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function JourneyListPage() {
  const [journeys, setJourneys] = useState<Journey[]>([]);
  const [page, setPage] = useState(0);
  const [sorter, setSorter] = useState('departure');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    journeyService
      .getJourneys(page, 10, sorter, order)
      .then((j) => {
        setJourneys(j);
      })
      .catch((e) => console.log(e));
  }, [page, sorter, order]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSorter(event.target.value);
  };

  const handleOrderChange = (event: SelectChangeEvent<string>) => {
    console.log(event.target.value);
    setOrder(event.target.value);
  };

  return (
    <>
      <div
        style={{
          minWidth: 400,
          width: '60%',
          margin: 'auto'
        }}
      >
        <h1
          style={{
            color: 'darkblue'
          }}
        >
          Journeys
        </h1>
        <InputLabel>Sort by:</InputLabel>
        <Select value={sorter} label="sort" onChange={handleChange}>
          <MenuItem value={'departure'}>departure</MenuItem>
          <MenuItem value={'return'}>return</MenuItem>
          <MenuItem value={'departure_station_id'}>
            departure station id
          </MenuItem>
          <MenuItem value={'departure_station_name'}>
            departure station name
          </MenuItem>
          <MenuItem value={'return_station_id'}>return station id</MenuItem>
          <MenuItem value={'return_station_name'}>return station name</MenuItem>
          <MenuItem value={'distance'}>distance</MenuItem>
          <MenuItem value={'duration'}>duration</MenuItem>
        </Select>
        <Select value={order} label="order" onChange={handleOrderChange}>
          <MenuItem value={'asc'}>ascending</MenuItem>
          <MenuItem value={'desc'}>descending</MenuItem>
        </Select>
      </div>
      <PageInfoCard page={page} setPage={setPage} />
      {journeys.map((j) => (
        <div key={j._id}>
          <JourneyCard journey={j} link={true} />
        </div>
      ))}
      <PageInfoCard page={page} setPage={setPage} />
    </>
  );
}

export default JourneyListPage;
