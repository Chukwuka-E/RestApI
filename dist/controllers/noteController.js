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
const noteModel_1 = require("../models/noteModel");
const errorHandler_1 = require("../utils/errorHandler");
class NoteController {
    getAllNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield noteModel_1.NoteModel.find();
                return res.status(200).json(notes);
            }
            catch (error) {
                throw new errorHandler_1.AppError('Error fetching notes', 500);
            }
        });
    }
    getNoteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const note = yield noteModel_1.NoteModel.findById(id);
                if (!note) {
                    throw new errorHandler_1.AppError('Note not found', 404);
                }
                return res.status(200).json(note);
            }
            catch (error) {
                return res.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    createNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNote = yield noteModel_1.NoteModel.createNote(req.body);
                return res.status(201).json(newNote);
            }
            catch (error) {
                throw new errorHandler_1.AppError('Error creating note', 500);
            }
        });
    }
    deleteNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield noteModel_1.NoteModel.findByIdAndDelete(id);
                return res.status(204).send();
            }
            catch (error) {
                return res.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
}
exports.default = NoteController;
