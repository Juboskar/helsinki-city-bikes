import React, { useEffect, useState } from 'react';
import journeyService from '../services/journeys';
import { Journey } from '../types';
import { JourneyCard } from '../components/JourneyCard';
import { useParams } from 'react-router-dom';

const JourneyPage = () => {
  const id = useParams().id;
  const [journey, setJourney] = useState<Journey | null>(null);
  const [info, setInfo] = useState('loading...');

  useEffect(() => {
    if (id) {
      journeyService
        .getJourney(id)
        .then((j) => {
          if (!j) setInfo('Journey not found');
          setJourney(j);
        })
        .catch((e: Error) => {
          console.log(e);
          setInfo(e.message);
        });
    }
  }, []);

  return (
    <>
      {journey ? <JourneyCard journey={journey} link={false} /> : <>{info}</>}
    </>
  );
};

export default JourneyPage;
