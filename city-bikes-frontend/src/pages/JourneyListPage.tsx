import React, { useEffect, useState } from 'react';
import journeyService from '../services/journeys';
import { Journey } from '../types';
import { PageInfoCard } from '../components/PageInfoCard';
import { JourneyCard } from '../components/JourneyCard';
import { SelectChangeEvent } from '@mui/material';
import { JourneySorter } from '../components/JourneySorter';

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

  const handleSorterChange = (event: SelectChangeEvent<string>) => {
    setSorter(event.target.value);
  };

  const handleOrderChange = (event: SelectChangeEvent<string>) => {
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
        </h1>{' '}
        <JourneySorter
          sorter={sorter}
          handleSorterChange={handleSorterChange}
          order={order}
          handleOrderChange={handleOrderChange}
        />
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
