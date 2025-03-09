import express from 'express';
import mongoose from 'mongoose';
import noteRoutes from './routes/noteRoutes';
import { Request, Response, NextFunction } from 'express';
import { AppError } from './utils/errorHandler';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/note-taking-api', {
    serverSelectionTimeoutMS: 5000,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/notes', noteRoutes);

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({ message });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});