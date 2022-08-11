import React, { useEffect, useState } from 'react';
import journeyService from '../services/journeys';
import { Journey } from '../types';

function JourneyListPage() {
  const [journeys, setJourneys] = useState<Journey[]>([]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const page = (() => {
      const param = urlParams.get('page');
      return param ? param : '10';
    })();
    const limit = (() => {
      const param = urlParams.get('limit');
      return param ? param : '10';
    })();

    journeyService
      .getJourneys(page, limit)
      .then((j) => {
        setJourneys(j);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {journeys.map((j) => {
        return <div key={j._id}>Journey id: {j._id}</div>;
      })}
    </>
  );
}

export default JourneyListPage;
