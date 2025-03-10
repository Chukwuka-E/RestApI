import { Request, Response } from 'express';
import { NoteModel } from '../models/noteModel';
import { AppError } from '../utils/errorHandler';

class NoteController {
    public async getAllNotes(req: Request, res: Response): Promise<Response> {
        try {
            const notes = await NoteModel.find();
            return res.status(200).json(notes);
        } catch (error) {
            throw new AppError('Error fetching notes', 500);
        }
    }

    public async getNoteById(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const note = await NoteModel.findById(id);
            if (!note) {
                throw new AppError('Note not found', 404);
            }
            return res.status(200).json(note);
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    public async createNote(req: Request, res: Response): Promise<Response> {
        try {
            const newNote = await NoteModel.createNote(req.body);
            return res.status(201).json(newNote);
        } catch (error) {
            throw new AppError('Error creating note', 500);
        }
    }

    public async deleteNote(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            await NoteModel.findByIdAndDelete(id);
            return res.status(204).send();
        } catch (error) {
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default NoteController;
