import express from "express";
import type { Request, Response, NextFunction } from "express";
import ValidationMiddleware from "../middlewares/validateMiddleware.js";

import CreateAdminDto from "./dtos/adminCreateDto.js";


const router = express.Router();

// get all admins
router.get('/', (req: Request, res: Response) => {
    console.log("get all admins");
    res.send("admins");
});

// create a new admin
router.post('/', ValidationMiddleware(CreateAdminDto), (req: Request, res: Response) => {
    console.log("create a new admin");
    res.send("create a new admin");
});

// get a specific admin
router.get('/:id', (req: Request, res: Response) => {
    console.log("get a specific admin");
    res.send("get a specific admin");
});

// update an existing admin
router.put('/:id', (req: Request, res: Response) => {
    console.log("update an existing admin");
    res.send("update an existing admin");
});

// delete an existing admin
router.delete('/:id', (req: Request, res: Response) => {
    console.log("delete an existing admin");
    res.send("delete an existing admin");
});

export default router;