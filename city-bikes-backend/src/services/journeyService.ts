import { Journey } from '../types';
import journeySchema from '../models/journeySchema';

const allJourneys = async (
  page: number,
  limit: number,
  sorter: string,
  order: string
): Promise<Journey[]> => {
  const sorting = `${order === 'asc' ? '' : '-'}${sorter}`;

  return await journeySchema
    .find({})
    .sort(sorting)
    .skip(page * limit)
    .limit(limit);
};

const findJourneyById = async (id: string): Promise<Journey | null> => {
  return await journeySchema.findById(id);
};

const countJourneysByDepartureStation = async (
  station_id: string
): Promise<number> => {
  return await journeySchema.countDocuments({
    departure_station_id: station_id
  });
};

const countJourneysByReturnStation = async (
  station_id: string
): Promise<number> => {
  return await journeySchema.countDocuments({ return_station_id: station_id });
};

export default {
  allJourneys,
  findJourneyById,
  countJourneysByDepartureStation,
  countJourneysByReturnStation
};
