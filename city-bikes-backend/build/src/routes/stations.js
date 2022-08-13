"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const stationService_1 = __importDefault(require("../services/stationService"));
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    const page = req.query.page ? Number(req.query.page) : 1;
    const limit = req.query.limit ? Number(req.query.limit) : 10;
    stationService_1.default
        .allStations(page, limit)
        .then((result) => res.status(200).send(result))
        .catch((error) => next(error));
});
router.get('/search/:name', (req, res, next) => {
    const search = req.params.name ? req.params.name : '';
    stationService_1.default
        .findStationsByName(search)
        .then((result) => res.status(200).send(result))
        .catch((error) => next(error));
});
router.get('/:id', (req, res, next) => {
    stationService_1.default
        .findStationByStationId(req.params.id)
        .then((result) => res.status(200).send(result))
        .catch((error) => next(error));
});
exports.default = router;
