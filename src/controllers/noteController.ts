import { Request, Response, NextFunction } from "express";
import Note from "../models/noteModel";
import { AuthRequest } from "../middleware/authMiddleware";

export const createNote = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const { title, content } = req.body;
    const newNote = new Note({ title, content, userId: req.user.userId });

    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

export const getUserNotes = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const notes = await Note.find({ userId: req.user.userId });
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const note = await Note.findOne({
      _id: req.params.id,
      userId: req.user.userId,
    });
    
    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return;
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    await note.save();

    res.json(note);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });

    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return;
    }

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    next(error);
  }
};