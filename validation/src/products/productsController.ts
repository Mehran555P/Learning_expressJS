import express from 'express';
import type { Request, Response, NextFunction } from 'express';

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
router.post('/', (req: Request, res: Response) => {
    // ...
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