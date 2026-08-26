import express from "express";
import type { Request, Response, NextFunction } from "express";
import ValidationMiddleware from "../middlewares/validateMiddleware.js";

import CreateAdminDto from "./dtos/adminCreateDto.js";
import { createAdmin, getAllAdmins } from "./adminsServices.js";
import type Admin from "./dtos/adminDto.js";


const router = express.Router();

// get all admins
router.get('/', async (req: Request, res: Response) => {
    try {
        res.send(await getAllAdmins());
    }catch (err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

// create a new admin
router.post('/', ValidationMiddleware(CreateAdminDto), async (req: Request, res: Response) => {
    try {
        const body: Admin = req.body;
        res.send(await createAdmin(body));
    }catch (err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
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