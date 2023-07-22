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
exports.getFeedbacks = exports.createFeedback = void 0;
const feedback_1 = __importDefault(require("../models/feedback"));
const createFeedback = (message) => __awaiter(void 0, void 0, void 0, function* () {
    const feedback = new feedback_1.default({ message, customer: 'Trendyol' });
    return feedback.save();
});
exports.createFeedback = createFeedback;
const getFeedbacks = () => __awaiter(void 0, void 0, void 0, function* () {
    return feedback_1.default.find({ customer: 'Trendyol' }).exec();
});
exports.getFeedbacks = getFeedbacks;
