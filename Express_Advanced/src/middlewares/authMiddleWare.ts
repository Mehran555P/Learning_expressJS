import type { Request, Response, NextFunction } from "express";


function authMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.body.role === "admin") {
        next();
    }else{
        res.status(401).send("Unauthorized");
    }
}

export default authMiddleware;