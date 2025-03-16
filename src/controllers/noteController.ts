import { NoteModel, INote } from '../models/noteModel';
import AppError from '../utils/errorHandler';
import { Request, Response, NextFunction } from 'express';

class NoteService {
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

    async createNote(noteData: { title: string; content: string; category: any }): Promise<INote> {
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

class NoteController {
    private noteService: NoteService;

    constructor() {
        this.noteService = new NoteService();
    }

    public async getAllNotes(_: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const notes = await this.noteService.getAllNotes();
            res.status(200).json(notes);
        } catch (error) {
            next(new AppError('Error fetching notes', 500));
        }
    }

    public async getNoteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        try {
            const note = await this.noteService.getNoteById(id);
            if (!note) {
                next(new AppError('Note not found', 404));
                return;
            }
            res.status(200).json(note);
        } catch (error) {
            next(new AppError('Error retrieving note', 500));
        }
    }

    public async getNotesByCategoryId(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { categoryId } = req.params;
        try {
            const notes = await this.noteService.getNotesByCategoryId(categoryId);
            res.status(200).json(notes);
        } catch (error) {
            next(new AppError('Error fetching notes by category', 500));
        }
    }

    public async createNote(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { title, content, category } = req.body;
        try {
            const newNote = await this.noteService.createNote({ title, content, category });
            res.status(201).json(newNote);
        } catch (error) {
            next(new AppError('Error creating note', 500));
        }
    }

    public async updateNote(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        const { title, content, category } = req.body;
        try {
            const updatedNote = await this.noteService.updateNote(id, { title, content, category });
            if (!updatedNote) {
                next(new AppError('Note not found', 404));
                return;
            }
            res.status(200).json(updatedNote);
        } catch (error) {
            next(new AppError('Error updating note', 500));
        }
    }

    public async deleteNote(req: Request, res: Response, next: NextFunction): Promise<void> {
        const { id } = req.params;
        try {
            await this.noteService.deleteNote(id);
            res.status(204).send();
        } catch (error) {
            next(new AppError('Error deleting note', 500));
        }
    }
}

export default NoteController;
export { NoteService };
