import type { Request, Response, NextFunction } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import ClientError from "../errors/clientError.js";

function ValidationMiddleware(validationSchema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const body = req.body || {};

    const validationClass = plainToInstance(validationSchema, body);

    validate(validationClass, {}).then((errors) => {
      if (errors.length > 0) {
        const clientError = new ClientError();
        clientError.data = [];
        clientError.errors = errors.map((error: any) => {
          return { [error.property]: Object.values(error.constraints || {}) };
        });

        return res.status(400).json(clientError);

      }

      next();
    }).catch((err) => {
      next(err);
    });
  };
}

export default ValidationMiddleware;