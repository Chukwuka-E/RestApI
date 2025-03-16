"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNote = void 0;
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const validateNote = (req, _res, next) => {
    const { title, content, category } = req.body;
    if (!title || !content || !category) {
        throw new errorHandler_1.default('Invalid note format', 400);
    }
    next();
};
exports.validateNote = validateNote;
exports.default = exports.validateNote; // Default export
