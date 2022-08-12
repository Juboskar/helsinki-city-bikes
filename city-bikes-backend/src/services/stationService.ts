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

export default { allStations, findStationByStationId };
