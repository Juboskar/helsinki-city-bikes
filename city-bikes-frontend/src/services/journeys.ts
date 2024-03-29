import axios from 'axios';
import { Journey } from '../types';
const baseUrl = '/api/journeys';

const getJourneys = (
  page: number,
  limit: number,
  sorter: string,
  order: string
) => {
  const request = axios.get<Journey[]>(
    `${baseUrl}?page=${page}&limit=${limit}&sort=${sorter}&order=${order}`
  );
  return request.then((response) => response.data);
};

const getJourney = (id: string) => {
  const request = axios.get<Journey>(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const countJourneysByDepatureStation = (id: string) => {
  const request = axios.get<{ journeys: number }>(`${baseUrl}/departure/${id}`);
  return request.then((response) => response.data);
};

const countJourneysByReturnStation = (id: string) => {
  const request = axios.get<{ journeys: number }>(`${baseUrl}/return/${id}`);
  return request.then((response) => response.data);
};

export default {
  getJourneys,
  getJourney,
  countJourneysByDepatureStation,
  countJourneysByReturnStation
};
