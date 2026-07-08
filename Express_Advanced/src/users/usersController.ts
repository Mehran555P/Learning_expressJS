import { Router } from "express";
import type { Request, Response } from "express";
import { authMiddleware, ValidateMiddleWare } from "../middlewares/index.js";
import { createNewUser, getAllUsers } from "./usersServices.js";
import CreateUserDto from "./dtos/usersCreateDto.js";
import type User from "./dtos/userDto.js";

const router = Router();

// router.use(authMiddleware);

router.get('/', (req: Request, res: Response) => {
    try {
        res.send(getAllUsers());
    }catch (err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
    
});

router.get('/:id', (req: Request, res: Response) => {
    res.send("get user");
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

router.put('/:id', (req: Request, res: Response) => {
    res.send("update user");
});

router.delete('/:id', (req: Request, res: Response) => {
    res.send("delete user");
});


export default router;
//module.exports();
