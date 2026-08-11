import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import ValidationMiddleware from '../middlewares/validateMiddleware.js';
import CreateProductDto from './dtos/productsCreateDto.js';
import type Product from './dtos/productDto.js';
import { createNewProduct } from './productsServices.js';
const router = express.Router();

// get all products
router.get('/', (req: Request, res: Response) => {
    res.send("all products");
    console.log("all products page")
});

// get one product
router.get('/:id', (req: Request, res: Response) => {
    res.send("one product");
    console.log("one product page")
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

// update a product
router.put('/:id', (req: Request, res: Response) => {
    // ...
});

// delete a product
router.delete('/:id', (req: Request, res: Response) => {
    // ...
});

export default router;