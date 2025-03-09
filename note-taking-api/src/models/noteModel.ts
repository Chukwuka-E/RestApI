import mongoose, { Document, Schema } from 'mongoose';

export interface Note extends Document {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const noteSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

noteSchema.pre('save', function (this: Note, next: mongoose.CallbackWithoutResult) {
    this.updatedAt = new Date();
    next(null);
});

export const NoteModel = mongoose.model<Note>('Note', noteSchema);