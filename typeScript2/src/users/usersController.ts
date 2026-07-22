import express from 'express';
import type { Request, Response, NextFunction } from 'express';


const router = express.Router();


router.get('/', (req: Request, res: Response) => {
    console.log("users page log");
    res.send("users page");
})


export default router;