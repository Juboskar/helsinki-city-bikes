import React, { useEffect, useState } from 'react';
import stationService from '../services/stations';
import { Station } from '../types';
import { StationCard } from '../components/StationCard';
import { useParams } from 'react-router-dom';

const StationPage = () => {
  const id = useParams().id;
  const [station, setStation] = useState<Station | null>(null);

  useEffect(() => {
    if (id) {
      stationService
        .getStation(id)
        .then((s) => {
          setStation(s);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <>
      {station ? (
        <StationCard station={station} link={false} />
      ) : (
        <>Station not found</>
      )}
    </>
  );
};

export default StationPage;
