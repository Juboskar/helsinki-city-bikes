import axios from 'axios';
import { Station } from '../types';
const baseUrl = '/api/stations';

const getStations = (page: number, limit: number) => {
  const request = axios.get<Station[]>(
    `${baseUrl}?page=${page}&limit=${limit}`
  );
  return request.then((response) => response.data);
};

const getStation = (id: string) => {
  const request = axios.get<Station>(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const getStationsByName = (name: string) => {
  const request = axios.get<Station[]>(`${baseUrl}/search/${name}`);
  return request.then((response) => response.data);
};

export default { getStations, getStation, getStationsByName };
