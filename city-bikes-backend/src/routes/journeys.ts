import express from 'express';
import journeyService from '../services/journeyService';

const router = express.Router();

router.get('/', (req, res, next) => {
  const page = req.query.page ? Number(req.query.page) : 10;
  const limit = req.query.limit ? Number(req.query.limit) : 10;

  journeyService
    .allJourneys(page, limit)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

router.get('/:id', (req, res, next) => {
  journeyService
    .findJourneyById(req.params.id)
    .then((result) => res.status(200).send(result))
    .catch((error) => next(error));
});

export default router;
