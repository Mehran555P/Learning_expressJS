import express from 'express'
import type { Request, Response } from 'express';
const app = express()


app.get('/', (req: Request, res: Response) => {
    res.send("Home page.")
})

app.get('/users', (req: Request, res: Response) => {
    const users = [
        {name: "Mehran", age: 18},
        {name: "Mahan", age: 11},
        {name: "sara", age: 20},
    ]
    res.send(users)
})

app.listen(3000, ()=> {
    console.log("Server is running in port 3000")
})