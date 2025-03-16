"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteController_1 = __importDefault(require("../controllers/noteController"));
const validateNote_1 = require("../middleware/validateNote");
const logger_1 = __importDefault(require("../middleware/logger"));
const router = (0, express_1.Router)();
const noteController = new noteController_1.default();
router.use(logger_1.default);
router.get('/', noteController.getAllNotes.bind(noteController));
router.get('/:id', noteController.getNoteById.bind(noteController));
router.get('/categories/:categoryId', noteController.getNotesByCategoryId.bind(noteController));
router.post('/', validateNote_1.validateNote, noteController.createNote.bind(noteController));
router.put('/:id', validateNote_1.validateNote, noteController.updateNote.bind(noteController));
router.delete('/:id', noteController.deleteNote.bind(noteController));
exports.default = router;
