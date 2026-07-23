import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import usersController from './users/usersController.js';
const app = express();


app.get('/', (req: Request, res: Response) => {
    console.log("home page log.");
    res.send("home page");
})


app.use('/users', usersController);

app.listen(3000, () => {
    console.log("server is running on port 3000.")
});