import { Router } from "express";
import type { Request, Response } from "express";
import { register } from "./authServices.js";
import RegisterDto from "./dtos/registerDto.js";
import ValidateMiddleWare from "../middlewares/validateMiddleWare.js";

const router = Router();

router.post('/login', (req: Request, res: Response) => {

});

router.post('/register', ValidateMiddleWare(RegisterDto), (req: Request, res: Response) => {
    try{
        const body: RegisterDto = req.body;
        res.send(register(body));
    }catch (err: any){
        res.status(500).send({message: err.message})
    }
});

export default router;
//module.exports();
