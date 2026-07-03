import { Router } from "express";
import type { Request, Response } from "express";
import { authMiddleware } from "../middlewares/index.js";
import { getAllUsers } from "./usersServices.js";
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

router.post('/', (req: Request, res: Response) => {
    const body = req.body;
    // console.log(body);
 
    if (!body.name || !body.email ) {
        res.status(400).send({ message: "name or email is required"})
    }

    // email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(body.email)) {
        res.status(400).send({ message: "email is not valid" });
    }


    res.send("create user");
});

router.put('/:id', (req: Request, res: Response) => {
    res.send("update user");
});

router.delete('/:id', (req: Request, res: Response) => {
    res.send("delete user");
});


export default router;
//module.exports();
