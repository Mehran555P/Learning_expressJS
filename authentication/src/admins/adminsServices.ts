import type { Request, Response, NextFunction } from "express";



export const getAllAdmins = (req: Request, res: Response, next: NextFunction) => {
    console.log("get all admins");
    res.send("admins");
}

export const createAdmin = (req: Request, res: Response, next: NextFunction) => {
    
}