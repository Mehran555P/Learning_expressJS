import express from "express";
import type { Request, Response, NextFunction } from "express";
import ValidationMiddleware from "../middlewares/validateMiddleware.js";
import CreateAdminDto from "./dtos/adminCreateDto.js";
import { createAdmin, deleteOneAdmin, getAllAdmins, getOneAdmin, updateOneAdmin } from "./adminsServices.js";
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
router.get('/:id', async (req: Request, res: Response) => {
    try{
        const id = req.params.id as string;
        res.send(await getOneAdmin(id));
    }catch(err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

// update an existing admin
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const params: Admin = req.body;
        const id = req.params.id as string;
        res.send(await updateOneAdmin(id, params));
    }catch(err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

// delete an existing admin
router.delete('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        res.send(await deleteOneAdmin(id));
    }catch(err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

export default router;