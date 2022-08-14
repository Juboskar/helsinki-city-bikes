import React, { useEffect, useState } from 'react';
import stationService from '../services/stations';
import journeyService from '../services/journeys';
import { Station } from '../types';
import { StationCard } from '../components/StationCard';
import { useParams } from 'react-router-dom';

const StationPage = () => {
  const id = useParams().id;
  const [station, setStation] = useState<Station | null>(null);
  const [departures, setDepartures] = useState<number | undefined>(undefined);
  const [returns, setReturns] = useState<number | undefined>(undefined);
  const [info, setInfo] = useState('loading...');

  useEffect(() => {
    if (id) {
      stationService
        .getStation(id)
        .then((s) => {
          setStation(s);
          setInfo('Station not found');
        })
        .catch((e: Error) => {
          console.log(e);
          setInfo(e.message);
        });

      journeyService
        .countJourneysByDepatureStation(id)
        .then((c) => {
          setDepartures(c.journeys);
        })
        .catch((e) => console.log(e));

      journeyService
        .countJourneysByReturnStation(id)
        .then((c) => {
          setReturns(c.journeys);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <>
      {station ? (
        <>
          <StationCard
            station={station}
            departures={departures}
            returns={returns}
            showMap={true}
          />
        </>
      ) : (
        <>{info}</>
      )}
    </>
  );
};

export default StationPage;
