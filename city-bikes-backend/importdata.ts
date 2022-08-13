import csv from 'csvtojson';
import mongoose from 'mongoose';
import StationSchema from './src/models/stationSchema';
import JourneySchema from './src/models/journeySchema';
import { MONGODB_URI } from './src/config';
import _ from 'lodash';
import { Journey } from './src/types';

void (async (): Promise<void> => {
  await mongoose.connect(MONGODB_URI);

  await StationSchema.deleteMany({});
  await JourneySchema.deleteMany({});

  const stations = await csv({
    headers: [
      'FID',
      'ID',
      'name_fi',
      'name_sv',
      'name_en',
      'address',
      'address_sv',
      'city',
      'city_sv',
      'operator',
      'capasity',
      'x',
      'y'
    ]
  }).fromFile('data/Helsingin_ja_Espoon_kaupunkipyB6rA4asemat_avoin.csv');

  await StationSchema.insertMany(stations.map((m) => new StationSchema(m)));

  const headers = {
    headers: [
      'departure',
      'return',
      'departure_station_id',
      'departure_station_name',
      'return_station_id',
      'return_station_name',
      'distance',
      'duration'
    ]
  };

  // const file1 = await csv(headers).fromFile('data/2021-05.csv');
  // const file2 = await csv(headers).fromFile('data/2021-06.csv');
  // const file3 = await csv(headers).fromFile('data/2021-07.csv');
  // const journeys = file1.concat(file2, file3);

  const journeys = await csv(headers).fromFile('data/2021-06.csv');

  const filtered = journeys.filter(
    (j: Journey) => j.distance >= 10 && j.duration >= 10
  );

  const splitted = _.chunk(filtered, 1000);
  for (let i = 0; i < splitted.length; i++) {
    await JourneySchema.insertMany(
      splitted[i].map((j) => new JourneySchema(j))
    );
  }

  await mongoose.connection.close();
})();
