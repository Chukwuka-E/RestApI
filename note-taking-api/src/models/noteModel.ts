import mongoose, { Document, Schema, Model } from 'mongoose';

export interface INote extends Document {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

const NoteSchema: Schema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// ✅ Correct way to define a static method
NoteSchema.statics.createNote = async function (noteInput: INote) {
    const note = new this(noteInput);
    return await note.save();
};

interface NoteModel extends Model<INote> {
    createNote(noteInput: INote): Promise<INote>;
}


export const NoteModel = mongoose.model<INote, NoteModel>('Note', NoteSchema);
