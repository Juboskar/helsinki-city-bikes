import mongoose from 'mongoose';
import { Journey } from '../types';

const journeySchema = new mongoose.Schema<Journey>({
  departure: { type: Date, required: true },
  return: { type: Date, required: true },
  departure_station_id: { type: Number, required: true },
  departure_station_name: { type: String, required: true },
  return_station_id: { type: Number, required: true },
  return_station_name: { type: String, required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true }
});

export default mongoose.model('Journey', journeySchema);
