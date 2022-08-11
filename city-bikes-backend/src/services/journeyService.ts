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

export default { allJourneys, findJourneyById };
