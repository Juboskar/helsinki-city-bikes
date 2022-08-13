"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const journeys_1 = __importDefault(require("./routes/journeys"));
const stations_1 = __importDefault(require("./routes/stations"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
mongoose_1.default
    .connect(config_1.MONGODB_URI)
    .then((_result) => {
    console.log('connected to MongoDB');
})
    .catch((error) => {
    console.log(error.message);
});
app.use('/api/journeys', journeys_1.default);
app.use('/api/stations', stations_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '../static')));
app.get('/', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../static/index.html'));
});
app.listen(config_1.PORT, () => {
    console.log(`Server running on port ${config_1.PORT}`);
});
