import { NoteModel, Note } from '../models/noteModel';
import { AppError } from '../utils/errorHandler';

export class NoteService {
    async getAllNotes(): Promise<Note[]> {
        try {
            return await NoteModel.find();
        } catch (error) {
            throw new AppError('Error retrieving notes', 500);
        }
    }

    async getNoteById(id: string): Promise<Note | null> {
        try {
            const note = await NoteModel.findById(id);
            if (!note) {
                throw new AppError('Note not found', 404);
            }
            return note;
        } catch (error) {
            throw new AppError('Error retrieving note', 500);
        }
    }

    async createNote(noteData: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>): Promise<Note> {
        try {
            const newNote = new NoteModel(noteData);
            return await newNote.save();
        } catch (error) {
            throw new AppError('Error creating note', 500);
        }
    }

    async deleteNote(id: string): Promise<void> {
        try {
            const result = await NoteModel.findByIdAndDelete(id);
            if (!result) {
                throw new AppError('Note not found', 404);
            }
        } catch (error) {
            throw new AppError('Error deleting note', 500);
        }
    }
}