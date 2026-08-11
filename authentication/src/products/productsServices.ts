import type { Request, Response, NextFunction } from "express";
import type Product from "./dtos/productDto.js";
import productModel from "../models/productModel.js";


// create new product
export const createNewProduct = (product: Product) => {
    return new Promise((resolve, reject) => {
        productModel.create(product).then((product) => {
            resolve(product);
        }).catch((err) => {
            reject(err);
        });
    })};