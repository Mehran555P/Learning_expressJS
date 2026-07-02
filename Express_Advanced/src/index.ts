import express from 'express';
import type { Request, Response, NextFunction } from 'express';

// enable cors
import cors from 'cors';
const app = express();

// Middleware

// const myMiddleware = ((req: Request, res: Response, next: NextFunction) => {
//     console.log("time : ", Date.now());
//     next();
// })

// app.use(myMiddleware);

function auth(req: Request, res: Response, next: NextFunction) {
    if (req.body.role === "admin") {
        next();
    }else{
        res.status(401).send("Unauthorized");
    }
}

app.use(cors());
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
    res.send("Home page.");
});


app.get('/users', (req: Request, res: Response) => {
    const users = [
        {name: "Mehran", age: 18},
        {name: "Mahan", age: 11},
        {name: "sara", age: 20},
    ];
    res.send(users);
});

app.post('/users', auth, (req: Request, res: Response) => {
    res.send(req.body);
    console.log(req.body.name);
});



app.listen(3000, ()=> {
    console.log("Server is running in port 3000");
});