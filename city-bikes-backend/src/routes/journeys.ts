import express from 'express';
import journeyService from '../services/journeyService';

const router = express.Router();

router.get('/', (req, res, next) => {
  const page = req.query.page ? Number(req.query.page) : 1;
  const limit = req.query.limit ? Number(req.query.limit) : 10;
  const sorter = req.query.sort ? String(req.query.sort) : 'departure';
  const order = req.query.order ? String(req.query.order) : 'asc';

  journeyService
    .allJourneys(page, limit, sorter, order)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  journeyService
    .findJourneyById(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

router.get('/departure/:id', (req, res, next) => {
  journeyService
    .countJourneysByDepartureStation(req.params.id)
    .then((result) => res.status(200).send({ journeys: result }))
    .catch((error) => next(error));
});
router.get('/return/:id', (req, res, next) => {
  journeyService
    .countJourneysByReturnStation(req.params.id)
    .then((result) => res.status(200).send({ journeys: result }))
    .catch((error) => next(error));
});

export default router;
