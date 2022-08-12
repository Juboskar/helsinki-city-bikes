import axios from 'axios';
import { Journey } from '../types';
const baseUrl = '/api/journeys';

const getJourneys = (page: number, limit: number) => {
  const request = axios.get<Journey[]>(
    `${baseUrl}?page=${page}&limit=${limit}`
  );
  return request.then((response) => response.data);
};

export default { getJourneys };
