import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import type User from './dtos/userDto.js';

const router = express.Router();

// get all users
router.get('/', (req: Request, res: Response) => {
    console.log("users page log.");
    res.send("users page");
})

// get one user
router.get('/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(`get user by id: ${id}`);
    res.send(`get user by id: ${id}`)
})

// create a new user
router.post('/', async(req: Request, res: Response) => {

    const body: User = req.body;
    res.send("user created.");
    res.send(await createNewUser(body));

})


export default router;