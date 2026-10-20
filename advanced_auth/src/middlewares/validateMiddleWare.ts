import type { Request, Response, NextFunction } from "express";
import { plainToClass, plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import ClientError from "../errors/clientError.js";

function ValidateMiddleWare(validationSchema: any) {
     return (req: Request, res: Response, next: NextFunction) => {
        const body = req.body;
        const errors = {};
        const clientError = new ClientError()
        const validationClass = plainToInstance(validationSchema, body);
        validate(validationClass, {}).then((errors) => {
            if (errors.length > 0) {
                clientError.data = [];
                clientError.errors = errors.map((error: any) => {
                    return {[ error.property ]: Object.values(error.constraints)}
                });
                res.status(400).send(clientError);
            }else {
                next();
            }
        });


     }
}

export default ValidateMiddleWare;