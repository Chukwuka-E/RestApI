import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/errorHandler';

export const validateNote = (req: Request, _res: Response, next: NextFunction) => {
    const { title, content, category } = req.body;

    if (!title || !content || !category) {
        throw new AppError('Invalid note format', 400);
    }

    next();
};

export default validateNote; 
