import express from 'express';
import stationService from '../services/stationService';

const router = express.Router();

router.get('/', (req, res, next) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;

  stationService
    .allStations(page, limit)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

router.get('/search/:name', (req, res, next) => {
  const search = req.params.name ? req.params.name : '';

  stationService
    .findStationsByName(search)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  stationService
    .findStationByStationId(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

export default router;
