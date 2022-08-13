"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const journeySchema = new mongoose_1.default.Schema({
    departure: { type: Date, required: true },
    return: { type: Date, required: true },
    departure_station_id: { type: Number, required: true },
    departure_station_name: { type: String, required: true },
    return_station_id: { type: Number, required: true },
    return_station_name: { type: String, required: true },
    distance: { type: Number, required: true },
    duration: { type: Number, required: true }
});
exports.default = mongoose_1.default.model('Journey', journeySchema);
