import express from "express";
import type { Request, Response, NextFunction } from "express";


const router = express.Router();

// get all admins
router.get('/', (req: Request, res: Response) => {
    console.log("get all admins");
    res.send("admins");
});



export default router;