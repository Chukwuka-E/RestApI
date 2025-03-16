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
exports.NoteService = void 0;
const noteModel_1 = require("../models/noteModel");
const errorHandler_1 = require("../utils/errorHandler");
class NoteService {
    getAllNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield noteModel_1.NoteModel.find();
            }
            catch (error) {
                throw new errorHandler_1.AppError('Error retrieving notes', 500);
            }
        });
    }
    getNoteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield noteModel_1.NoteModel.findById(id);
                if (!note) {
                    throw new errorHandler_1.AppError('Note not found', 404);
                }
                return note;
            }
            catch (error) {
                throw new errorHandler_1.AppError('Error retrieving note', 500);
            }
        });
    }
    getNotesByCategoryId(categoryId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield noteModel_1.NoteModel.find({ 'category.id': categoryId });
            }
            catch (error) {
                throw new errorHandler_1.AppError('Error retrieving notes by category', 500);
            }
        });
    }
    createNote(noteData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newNote = new noteModel_1.NoteModel(noteData);
                return yield newNote.save();
            }
            catch (error) {
                throw new errorHandler_1.AppError('Error creating note', 500);
            }
        });
    }
    updateNote(id, noteData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedNote = yield noteModel_1.NoteModel.findByIdAndUpdate(id, noteData, { new: true });
                if (!updatedNote) {
                    throw new errorHandler_1.AppError('Note not found', 404);
                }
                return updatedNote;
            }
            catch (error) {
                throw new errorHandler_1.AppError('Error updating note', 500);
            }
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield noteModel_1.NoteModel.findByIdAndDelete(id);
                if (!result) {
                    throw new errorHandler_1.AppError('Note not found', 404);
                }
            }
            catch (error) {
                throw new errorHandler_1.AppError('Error deleting note', 500);
            }
        });
    }
}
exports.NoteService = NoteService;
