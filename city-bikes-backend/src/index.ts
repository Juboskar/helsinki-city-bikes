import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGODB_URI } from './config';

const app = express();

mongoose
  .connect(MONGODB_URI)
  .then((_result) => {
    console.log('connected to MongoDB');
  })
  .catch((error: Error) => {
    console.log(error.message);
  });

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.status(200).send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
