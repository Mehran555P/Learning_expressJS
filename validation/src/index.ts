import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import usersController from './users/usersController.js';
const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log("home page log.");
    res.send("home page");
})


app.use('/users', usersController);

// DB connection
mongoose.connect("mongodb://localhost:27017/validation", {
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