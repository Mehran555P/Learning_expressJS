import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

// controllers
import usersController from './users/usersController.js';
import productsController from "./products/productsController.js";

// enable cors 
import cors from 'cors';
// express app
const app = express();



// middlewares
app.use(cors());
app.use(express.json());



app.get('/', (req: Request, res: Response) => {
    res.send("Home page.");
});


// routes group
app.use('/users', usersController);
app.use('/products', productsController);

 
// Middleware

// const myMiddleware = ((req: Request, res: Response, next: NextFunction) => {
//     console.log("time : ", Date.now());
//     next();
// })

// app.use(myMiddleware);


// DB connection
mongoose.connect("mongodb://localhost:27017/express_advanced", {
    autoIndex: true,
}).then(() => {
    // start server
    app.listen(3000, ()=> {
        console.log("Server is running in port 3000");
    });
    console.log('MongoDB connected successfully!')
}).catch((err) => {
    console.log("error: ", err);
});



