import { Router, Request, Response } from 'express';
import NoteController from '../controllers/noteController';

class LocalNoteController {
  async getAllNotes(req: Request, res: Response): Promise<void> {
    // method implementation
  }

  async getNoteById(req: Request, res: Response): Promise<void> {
    // method implementation
  }
  
  async deleteNote(req: Request, res: Response): Promise<void> {
    // method implementation
  }

  async createNote(req: Request, res: Response): Promise<void> {
    // method implementation
  }
}

const router = Router();
const noteController = new LocalNoteController();

router.get('/api/notes', noteController.getAllNotes.bind(noteController));
router.get('/api/notes/:id', noteController.getNoteById.bind(noteController));
router.post('/api/notes', noteController.createNote.bind(noteController));
router.delete('/api/notes/:id', noteController.deleteNote.bind(noteController));

export default router;