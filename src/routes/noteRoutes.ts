import express from "express";
import { authenticateUser } from "../middleware/authMiddleware";
import { createNote, getUserNotes, updateNote, deleteNote } from "../controllers/noteController";

const router = express.Router();

router.post("/", authenticateUser, createNote);
router.get("/", authenticateUser, getUserNotes);
router.put("/:id", authenticateUser, updateNote);
router.delete("/:id", authenticateUser, deleteNote);

export default router;
