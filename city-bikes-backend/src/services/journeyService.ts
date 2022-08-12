import { Journey } from '../types';
import journeySchema from '../models/journeySchema';

const allJourneys = async (page: number, limit: number): Promise<Journey[]> => {
  return await journeySchema
    .find({})
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
