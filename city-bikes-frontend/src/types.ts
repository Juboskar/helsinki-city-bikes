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
  name_fi: string;
  name_sv: string;
  name_en: string;
  address: string;
  address_sv: string;
  city?: string;
  city_sv?: string;
  operator?: string;
  capasity: number;
  x: number;
  y: number;
}
