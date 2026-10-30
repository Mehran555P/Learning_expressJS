import { Router } from "express";
import type { Request, Response } from "express";
import { register, login } from "./authServices.js";
import RegisterDto from "./dtos/registerDto.js";
import ValidateMiddleWare from "../middlewares/validateMiddleWare.js";
import LoginDto from "./dtos/loginDto.js";

const router = Router();

router.post('/login', ValidateMiddleWare(LoginDto), (req: Request, res: Response) => {
    try {
        const body: LoginDto = req.body;
        res.send(login(body));
    } catch (err: any){
        res.status(500).send({message: err.message});
    }

});

router.post('/register', ValidateMiddleWare(RegisterDto), (req: Request, res: Response) => {
    try{
        const body: RegisterDto = req.body;
        res.send(register(body));
    }catch (err: any){
        res.status(500).send({message: err.message});
    }
});

export default router;
//module.exports();
