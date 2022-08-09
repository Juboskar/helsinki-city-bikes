import csv from 'csvtojson';

(async () => {
  const all = await csv({
    headers: [
      'departure',
      'return',
      'departure_station.id',
      'departure_station.name',
      'return_station.id',
      'return_station.name',
      'distance',
      'duration'
    ]
  }).fromFile('data/2021-07.csv');
  const filtered = all.filter((t) => t.distance >= 10 && t.duration >= 10);
  console.log(filtered);
})();
