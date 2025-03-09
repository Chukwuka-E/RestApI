import { Request, Response } from 'express';
import { NoteService } from '../services/noteService';
import { AppError } from '../utils/errorHandler';

class NoteController {
    private noteService: NoteService;

    constructor() {
        this.noteService = new NoteService();
    }

    public async getAllNotes(req: Request, res: Response): Promise<Response> {
        try {
            const notes = await this.noteService.getAllNotes();
            return res.status(200).json(notes);
        } catch (error) {
            throw new AppError('Error fetching notes', 500);
        }
    }

    public async getNoteById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const note = await this.noteService.getNoteById(id);
            if (!note) {
                throw new AppError('Note not found', 404);
            }
            return res.status(200).json(note);
        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    public async createNote(req: Request, res: Response): Promise<Response> {
        const { title, content } = req.body;
        try {
            const newNote = await this.noteService.createNote({ title, content });
            return res.status(201).json(newNote);
        } catch (error) {
            throw new AppError('Error creating note', 500);
        }
    }

    public async deleteNote(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            await this.noteService.deleteNote(id);
            return res.status(204).send();
        } catch (error) {
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({ message: error.message });
            }
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default NoteController;