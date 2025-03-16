import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, _res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    
    if (req.method !== 'GET') {
        console.log('Body:', req.body);
    }

    next();
};

export default logger; 
