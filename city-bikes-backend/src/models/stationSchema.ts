import mongoose from 'mongoose';
import { Station } from '../types';

const stationSchema = new mongoose.Schema<Station>({
  FID: { type: Number, required: true },
  ID: { type: Number, required: true },
  Nimi: { type: String, required: true },
  Namn: { type: String, required: true },
  Name: { type: String, required: true },
  Osoite: { type: String, required: true },
  Adress: { type: String, required: true },
  Kaupunki: String,
  Stad: String,
  Operaattor: String,
  Kapasiteet: { type: Number, required: true },
  x: { type: Number, required: true },
  y: { type: Number, required: true }
});

export default mongoose.model('Station', stationSchema);
