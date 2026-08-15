import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import ValidationMiddleware from '../middlewares/validateMiddleware.js';
import CreateProductDto from './dtos/productsCreateDto.js';
import type Product from './dtos/productDto.js';
import { createNewProduct, deleteOneProduct, getAllProducts, getOneProduct, updateOneProduct } from './productsServices.js';
const router = express.Router();

// get all products
router.get('/', async (req: Request, res: Response) => {
    try {
        res.send(await getAllProducts());
    }catch(err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

// create a new product
router.post('/', ValidationMiddleware(CreateProductDto), async(req: Request, res: Response, next: NextFunction) => {

    try {
        const body: Product = req.body;
        const newUser = await createNewProduct(body);
        res.status(201).json(newUser);
    } catch (err){
        next(err);
    }
});


// get one product
router.get('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        res.send(await getOneProduct(id));
    }catch(err: any) {
        console.log("error: ", err.message);
        res.status(500).send({ message: err.message});
    }
});


// update a product
router.put('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        const body: Product = req.body;
        res.send(await updateOneProduct(id, body));
    }catch(err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

// delete a product
router.delete('/:id', async(req: Request, res: Response) => {
    try {
        const id = req.params.id as string;
        res.send(await deleteOneProduct(id));
    }catch(err: any) {
        console.log("error: ", err.message)
        res.status(500).send({ message: err.message});
    }
});

export default router;