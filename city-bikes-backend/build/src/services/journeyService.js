"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const journeySchema_1 = __importDefault(require("../models/journeySchema"));
const allJourneys = (page, limit, sorter) => __awaiter(void 0, void 0, void 0, function* () {
    return yield journeySchema_1.default
        .find({})
        .sort(sorter)
        .skip(page * limit)
        .limit(limit);
});
const findJourneyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield journeySchema_1.default.findById(id);
});
const countJourneysByDepartureStation = (station_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield journeySchema_1.default.countDocuments({
        departure_station_id: station_id
    });
});
const countJourneysByReturnStation = (station_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield journeySchema_1.default.countDocuments({ return_station_id: station_id });
});
exports.default = {
    allJourneys,
    findJourneyById,
    countJourneysByDepartureStation,
    countJourneysByReturnStation
};
