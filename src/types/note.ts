import mongoose, { Schema, Document } from "mongoose";

export interface Note extends Document {
  title: string;
  content: string;
  userId: string; // Associate note with a user
}

const NoteSchema = new Schema<Note>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  userId: { type: String, required: true }, // Store user ID
});

export default mongoose.model<Note>("Note", NoteSchema);
