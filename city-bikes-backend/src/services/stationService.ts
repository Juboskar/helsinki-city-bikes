import { Station } from '../types';
import stationSchema from '../models/stationSchema';

const allStations = async (page: number, limit: number): Promise<Station[]> => {
  return await stationSchema
    .find({})
    .skip(page * limit)
    .limit(limit);
};

const findStationByStationId = async (id: string): Promise<Station | null> => {
  return await stationSchema.findOne({ ID: id });
};

const findStationsByName = async (name: string): Promise<Station[]> => {
  return await stationSchema
    .find({ name_en: { $regex: `(?i).*${name}.*(?-i)` } })
    .limit(10);
};

export default { allStations, findStationByStationId, findStationsByName };
