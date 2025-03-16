import { Router } from 'express';
import NoteController from '../controllers/noteController';
import { validateNote } from '../middleware/validateNote';
import logger from '../middleware/logger';

const router = Router();
const noteController = new NoteController();

router.use(logger);

router.get('/', noteController.getAllNotes.bind(noteController));
router.get('/:id', noteController.getNoteById.bind(noteController));
router.get('/categories/:categoryId', noteController.getNotesByCategoryId.bind(noteController));
router.post('/', validateNote, noteController.createNote.bind(noteController));
router.put('/:id', validateNote, noteController.updateNote.bind(noteController));
router.delete('/:id', noteController.deleteNote.bind(noteController));

export default router;
