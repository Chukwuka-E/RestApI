import mongoose, { Document, Schema } from 'mongoose';

export interface Category {
    id: string;
    name: string;
}

export interface INote extends Document {
    title: string;
    content: string;
    category: Category;
    createdAt: Date;
    updatedAt: Date;
}

const CategorySchema: Schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true }
});

const NoteSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: CategorySchema, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export const NoteModel = mongoose.model<INote>('Note', NoteSchema);
export default NoteModel; 
