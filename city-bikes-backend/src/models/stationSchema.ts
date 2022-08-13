import mongoose from 'mongoose';
import { Station } from '../types';

const stationSchema = new mongoose.Schema<Station>({
  FID: { type: Number, required: true },
  ID: { type: Number, required: true },
  name_fi: { type: String, required: true },
  name_sv: { type: String, required: true },
  name_en: { type: String, required: true },
  address: { type: String, required: true },
  address_sv: { type: String, required: true },
  city: String,
  city_sv: String,
  operator: String,
  capasity: { type: Number, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true }
});

export default mongoose.model('Station', stationSchema);
