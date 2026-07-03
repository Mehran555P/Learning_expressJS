import { Router } from "express";
import type { Request, Response } from "express";
import { authMiddleware } from "../middlewares/index.js";
import { getAllProducts } from "./productsServices.js";
const router = Router();

// router.use(authMiddleware);

router.get('/', (req: Request, res: Response) => {
    try {
        res.send(getAllProducts());
    }catch (err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
    
});

router.get('/:id', (req: Request, res: Response) => {
    res.send("get user");
});

router.post('/', authMiddleware, (req: Request, res: Response) => {
    res.send("create user");
});

router.put('/:id', authMiddleware, (req: Request, res: Response) => {
    res.send("update user");
});

router.delete('/:id', authMiddleware, (req: Request, res: Response) => {
    res.send("delete user");
});


export default router;
//module.exports();
