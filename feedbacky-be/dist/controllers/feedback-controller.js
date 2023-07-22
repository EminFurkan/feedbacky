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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeedbacksController = exports.createFeedbackController = void 0;
const feedback_service_1 = require("../services/feedback-service");
const createFeedbackController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message } = req.body;
        if (!message) {
            res.status(400).json({ error: 'Message is required' });
            return;
        }
        const feedback = yield (0, feedback_service_1.createFeedback)(message);
        res.status(201).json(feedback);
    }
    catch (error) {
        console.error('Error creating feedback:', error);
        res.status(500).json({ error: 'Failed to create feedback' });
    }
});
exports.createFeedbackController = createFeedbackController;
const getFeedbacksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedbacks = yield (0, feedback_service_1.getFeedbacks)();
        res.json(feedbacks);
    }
    catch (error) {
        console.error('Error getting feedbacks:', error);
        res.status(500).json({ error: 'Failed to get feedbacks' });
    }
});
exports.getFeedbacksController = getFeedbacksController;
