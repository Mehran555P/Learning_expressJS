import type { Request, Response, NextFunction } from "express";
import { plainToClass, plainToInstance } from "class-transformer";

function ValidateMiddleWare(validationSchema: any) {
     return (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;
        const errors = [];
        const validation_output = plainToInstance(validationSchema, body);

        console.log(validation_output);

        next();
     }
}

export default ValidateMiddleWare;