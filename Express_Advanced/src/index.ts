import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import usersController from './users/usersController.js';

// enable cors
import cors from 'cors';
const app = express();



app.use(cors());
app.use(express.json());



app.get('/', (req: Request, res: Response) => {
    res.send("Home page.");
});

app.use('/users', usersController);
    


// Middleware

// const myMiddleware = ((req: Request, res: Response, next: NextFunction) => {
//     console.log("time : ", Date.now());
//     next();
// })

// app.use(myMiddleware);

app.listen(3000, ()=> {
    console.log("Server is running in port 3000");
});


