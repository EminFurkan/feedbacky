"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const dashboard_controller_1 = require("./controllers/dashboard-controller");
const feedback_controller_1 = require("./controllers/feedback-controller");
const db_conf_1 = require("./config/db.conf");
const constants_1 = require("./constants/constants");
dotenv_1.default.config({ path: './environment/.env' });
// Set up rate limiter
const limiter = (0, express_rate_limit_1.default)({
    windowMs: constants_1.RATE_LIMIT_WINDOW,
    max: constants_1.RATE_LIMIT_NUM, // Maximum number of requests from a single IP within the time window
});
const app = (0, express_1.default)();
const PORT = process.env.PORT;
// Connect to MongoDB
(0, db_conf_1.connectToDB)()
    .then(() => {
    app.listen(process.env.MONGO_PORT, () => {
        console.log(`Mongo Server is running on http://localhost:${process.env.MONGO_PORT}`);
    });
})
    .catch((error) => {
    console.error('Failed to start the server:', error);
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('Feedbacky Server');
});
app.post("/api/feedback", limiter, feedback_controller_1.createFeedbackController);
app.get("/api/dashboard", limiter, dashboard_controller_1.getDashboard);
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
exports.default = app;
