import React, { useEffect, useState } from 'react';
import journeyService from '../services/journeys';
import { Journey } from '../types';
import { JourneyCard } from '../components/JourneyCard';
import { useParams } from 'react-router-dom';

const JourneyPage = () => {
  const id = useParams().id;
  const [journey, setJourney] = useState<Journey | null>(null);

  useEffect(() => {
    if (id) {
      journeyService
        .getJourney(id)
        .then((j) => {
          setJourney(j);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <>
      {journey ? (
        <JourneyCard journey={journey} link={false} />
      ) : (
        <>Journey not found</>
      )}
    </>
  );
};

export default JourneyPage;
