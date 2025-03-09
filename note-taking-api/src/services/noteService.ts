import { NoteModel, INote } from '../models/noteModel';

export class NoteService {
    async getAllNotes(): Promise<INote[]> {
        return await NoteModel.find();
    }

    async getNoteById(id: string): Promise<INote | null> {
        return await NoteModel.findById(id);
    }

    async createNote(noteData: Omit<INote, 'createdAt' | 'updatedAt'>): Promise<INote> {
        return await new NoteModel(noteData).save();
    }

    async deleteNote(id: string): Promise<void> {
        await NoteModel.findByIdAndDelete(id);
    }
}
