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
const stationSchema_1 = __importDefault(require("../models/stationSchema"));
const allStations = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    return yield stationSchema_1.default
        .find({})
        .skip(page * limit)
        .limit(limit);
});
const findStationByStationId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield stationSchema_1.default.findOne({ ID: id });
});
const findStationsByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    return yield stationSchema_1.default
        .find({ name_fi: { $regex: `(?i).*${name}.*(?-i)` } })
        .limit(10);
});
exports.default = { allStations, findStationByStationId, findStationsByName };
