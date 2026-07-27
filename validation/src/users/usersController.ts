import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import type User from './dtos/userDto.js';
import CreateUserDto from './dtos/usersCreateDto.js';
import ValidationMiddlWare from '../middlewares/validateMiddleware.js';
import { createNewUser } from './usersServices.js';

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
});

// create a new user
router.post('/', ValidationMiddlWare(CreateUserDto), async(req: Request, res: Response, next: NextFunction) => {
    try {
      const body: User = req.body;
      const newUser = await createNewUser(body);
      res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
});

// update a user
router.put('/:id', (req: Request, res: Response) => {
    const body = req.body;
    if (req.params.id) 
        res.send(body);    
        console.log("user updated.");
});

// delete a user
router.delete('/:id', (req: Request, res: Response) => {
    const body = req.body;
    if (req.params.id) 
        res.send(body);    
        console.log("user deleted.");
});

export default router;