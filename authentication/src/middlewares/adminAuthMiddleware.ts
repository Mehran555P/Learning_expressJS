import type { Request, Response, NextFunction } from 'express';

function AdminAuthMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.body && req.body.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: 'Access denied. Admins only.' });
    }
}

export default AdminAuthMiddleware;