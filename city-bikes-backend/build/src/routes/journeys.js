"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const journeyService_1 = __importDefault(require("../services/journeyService"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    const sorter = req.query.sort ? String(req.query.sort) : 'departure';
    const order = req.query.order ? String(req.query.order) : 'asc';
    journeyService_1.default
        .allJourneys(page, limit, sorter, order)
        .then((result) => res.status(200).send(result))
        .catch((error) => next(error));
});
router.get('/:id', (req, res, next) => {
    journeyService_1.default
        .findJourneyById(req.params.id)
        .then((result) => res.status(200).send(result))
        .catch((error) => next(error));
});
router.get('/departure/:id', (req, res, next) => {
    journeyService_1.default
        .countJourneysByDepartureStation(req.params.id)
        .then((result) => res.status(200).send({ journeys: result }))
        .catch((error) => next(error));
});
router.get('/return/:id', (req, res, next) => {
    journeyService_1.default
        .countJourneysByReturnStation(req.params.id)
        .then((result) => res.status(200).send({ journeys: result }))
        .catch((error) => next(error));
});
exports.default = router;
