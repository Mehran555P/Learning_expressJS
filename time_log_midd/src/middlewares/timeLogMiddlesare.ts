import express from "express";
import type { Request, Response, NextFunction} from "express";

const timeLogMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (true){
        res.send(Date.now());
        console.log(Date.now());
        next();
    }
    // else {
    //     res.send("error");
    // }
}

export default timeLogMiddleware