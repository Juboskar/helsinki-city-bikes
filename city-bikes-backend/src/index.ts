import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config';
import journeyRouter from './routes/journeys';
import path from 'path';

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then((_result) => {
    console.log('connected to MongoDB');
  })
  .catch((error: Error) => {
    console.log(error.message);
  });

app.use('/api/journeys', journeyRouter);

app.use(express.static(path.join(__dirname, '../static')));

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
