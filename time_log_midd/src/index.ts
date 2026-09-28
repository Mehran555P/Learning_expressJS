import express from 'express';
import type { Request, Response, NextFunction } from 'express';

// middlewares
import timeLogMiddleware from './middlewares/timeLogMiddlesare'

// app
const app = express();


app.get('/', timeLogMiddleware, (req, res) => {

})


app.listen(3000, () => {
    console.log("app started.");
})