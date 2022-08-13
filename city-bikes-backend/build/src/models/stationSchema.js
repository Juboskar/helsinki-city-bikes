"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const stationSchema = new mongoose_1.default.Schema({
    FID: { type: Number, required: true },
    ID: { type: Number, required: true },
    name_fi: { type: String, required: true },
    name_sv: { type: String, required: true },
    name_en: { type: String, required: true },
    address: { type: String, required: true },
    address_sv: { type: String, required: true },
    city: String,
    city_sv: String,
    operator: String,
    capasity: { type: Number, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true }
});
exports.default = mongoose_1.default.model('Station', stationSchema);
