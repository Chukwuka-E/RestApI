import { NoteModel, INote } from '../models/noteModel';
import { AppError } from '../utils/errorHandler';

export class NoteService {
    async getAllNotes(): Promise<INote[]> {
        try {
            return await NoteModel.find();
        } catch (error) {
            throw new AppError('Error retrieving notes', 500);
        }
    }

    async getNoteById(id: string): Promise<INote | null> {
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

    async getNotesByCategoryId(categoryId: string): Promise<INote[]> {
        try {
            return await NoteModel.find({ 'category.id': categoryId });
        } catch (error) {
            throw new AppError('Error retrieving notes by category', 500);
        }
    }

    async createNote(noteData: Omit<INote, 'id' | 'createdAt' | 'updatedAt'>): Promise<INote> {
        try {
            const newNote = new NoteModel(noteData);
            return await newNote.save();
        } catch (error) {
            throw new AppError('Error creating note', 500);
        }
    }

    async updateNote(id: string, noteData: Partial<INote>): Promise<INote | null> {
        try {
            const updatedNote = await NoteModel.findByIdAndUpdate(id, noteData, { new: true });
            if (!updatedNote) {
                throw new AppError('Note not found', 404);
            }
            return updatedNote;
        } catch (error) {
            throw new AppError('Error updating note', 500);
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