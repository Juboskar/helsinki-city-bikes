import express from 'express';
import { PORT } from './config';

const app = express();

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.status(200).send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
