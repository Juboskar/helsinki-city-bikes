export interface Journey {
  departure: Date;
  return: Date;
  departure_station_id: number;
  departure_station_name: string;
  return_station_id: number;
  return_station_name: string;
  distance: number;
  duration: number;
  _id: string;
}

export interface Station {
  FID: number;
  ID: number;
  Nimi: string;
  Namn: string;
  Name: string;
  Osoite: string;
  Adress: string;
  Kaupunki?: string;
  Stad?: string;
  Operaattor?: string;
  Kapasiteet: number;
  x: number;
  y: number;
}
