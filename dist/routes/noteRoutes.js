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
const express_1 = require("express");
class LocalNoteController {
    getAllNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // method implementation
        });
    }
    getNoteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // method implementation
        });
    }
    deleteNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // method implementation
        });
    }
    createNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // method implementation
        });
    }
}
const router = (0, express_1.Router)();
const noteController = new LocalNoteController();
router.get('/api/notes', noteController.getAllNotes.bind(noteController));
router.get('/api/notes/:id', noteController.getNoteById.bind(noteController));
router.post('/api/notes', noteController.createNote.bind(noteController));
router.delete('/api/notes/:id', noteController.deleteNote.bind(noteController));
exports.default = router;
