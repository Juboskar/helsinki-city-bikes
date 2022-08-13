import React, { useEffect, useState } from 'react';
import journeyService from '../services/journeys';
import { Journey } from '../types';
import { PageInfoCard } from '../components/PageInfoCard';
import { JourneyCard } from '../components/JourneyCard';

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
      <h1
        style={{
          minWidth: 400,
          width: '60%',
          margin: 'auto',
          color: 'darkblue'
        }}
      >
        Journeys
      </h1>
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
