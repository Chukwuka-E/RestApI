"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, _res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    if (req.method !== 'GET') {
        console.log('Body:', req.body);
    }
    next();
};
exports.default = logger; // Default export
