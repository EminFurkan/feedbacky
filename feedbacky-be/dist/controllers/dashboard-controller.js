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
exports.getDashboard = void 0;
const feedback_service_1 = require("../services/feedback-service");
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const getDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedbacks = yield (0, feedback_service_1.getFeedbacks)();
        const ejsFilePath = path_1.default.join(__dirname, '../views/dashboard.ejs');
        ejs_1.default.renderFile(ejsFilePath, { feedbacks }, (err, html) => {
            if (err) {
                console.error('Error rendering EJS template:', err);
                res.status(500).json({ error: 'Failed to render EJS template' });
            }
            else {
                res.setHeader('Content-Type', 'text/html');
                res.send(html);
            }
        });
    }
    catch (error) {
        console.error('Error getting feedbacks:', error);
        res.status(500).json({ error: 'Failed to get feedbacks' });
    }
});
exports.getDashboard = getDashboard;
