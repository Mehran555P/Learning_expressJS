import { Router } from "express";
import type { Request, Response } from "express";
import { authMiddleware, ValidateMiddleWare } from "../middlewares/index.js";
import { createNewUser, deleteOneUser, updateOneUser, getAllUsers, getOneUser } from "./usersServices.js";
import CreateUserDto from "./dtos/usersCreateDto.js";
import type User from "./dtos/userDto.js";

const router = Router();

// router.use(authMiddleware);

router.get('/', async(req: Request, res: Response) => {
    try {
        res.send(await getAllUsers());
    }catch (err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
    
});

router.get('/:id', async(req: Request, res: Response) => {

    try {
        const id = req.params.id as string;
        res.send(await getOneUser(id));
    }catch (err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

router.post('/', ValidateMiddleWare(CreateUserDto) , async(req: Request, res: Response) => {

    try{
        const body: User = req.body;
        res.send(await createNewUser(body));
    }catch(err: any) {
        res.status(500).send({ message: err.message })
    }
    // console.log(body);



});

router.put('/:id', async(req: Request, res: Response) => {
    try {
        const params: User = req.body;
        const id = req.params.id as string;
        res.send(await updateOneUser(id, params));
    }catch (err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

router.delete('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        res.send(await deleteOneUser(id));
    }catch (err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});


export default router;
//module.exports();
