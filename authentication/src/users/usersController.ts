import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import type User from './dtos/userDto.js';
import CreateUserDto from './dtos/usersCreateDto.js';
import ValidationMiddlWare from '../middlewares/validateMiddleware.js';
import { createNewUser, deleteOneUser, getAllUsers, getOneUser, updateOneUser } from './usersServices.js';
import { stringify } from 'node:querystring';
import { resolve } from 'node:dns';

const router = express.Router();

// get all users
router.get('/', async(req: Request, res: Response) => {
    try {
        res.send(await getAllUsers());
    }catch(err: any) {
        console.log("error: ", err.message);
        res.status(500).send({ message: err.message});
    }
})

// get one user
router.get('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        res.send(await getOneUser(id));
    }catch(err: any) {
        console.log("error: ", err.message);
        res.status(500).send({ message: err.message});
    }


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
router.put('/:id', async(req: Request, res: Response) => {
    try {
        const params: User = req.body;
        const id = req.params.id as string;
        res.send(await updateOneUser(id, params));
    }catch(err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }

});

// delete a user
router.delete('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        res.send(await deleteOneUser(id));
    }catch(err: any) {
        console.log("error: ", err.message);
        res.status(500).send({ message: err.message});
    }
});

export default router;