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
class NoteService {
    getAllNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield noteModel_1.NoteModel.find();
        });
    }
    getNoteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield noteModel_1.NoteModel.findById(id);
        });
    }
    createNote(noteData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new noteModel_1.NoteModel(noteData).save();
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield noteModel_1.NoteModel.findByIdAndDelete(id);
        });
    }
}
exports.NoteService = NoteService;
