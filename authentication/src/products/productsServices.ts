import type { Request, Response, NextFunction } from "express";
import type Product from "./dtos/productDto.js";
import productModel from "../models/productModel.js";
import { resolve } from "node:dns";


// get all products
export const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        productModel.find().then((products) => {
            resolve(products);
        }).catch((err) => {
            reject(err);
        });
    });
}

// create new product
export const createNewProduct = (product: Product) => {
    return new Promise((resolve, reject) => {
        productModel.create(product).then((product) => {
            resolve(product);
        }).catch((err) => {
            reject(err);
        });
    });
}


// get one product
export const getOneProduct = (id: string) => {
    return new Promise((resolve, reject) => {
        productModel.findById(id).then((product) => {
            resolve(product);
        }).catch((err) => {
            reject(err);
        });
    });
}

// update one product
export const updateOneProduct = (id: string, product: Product) => {
    return new Promise((resolve, reject) => {
        productModel.findByIdAndUpdate(id, product).then((product) => {
            resolve(product);
        }).catch((err) => {
            reject(err);
        });
    });
}

// delete one product
export const deleteOneProduct = (id: string) => {
    return new Promise((resolve, reject) => {
        productModel.findByIdAndDelete(id).then((product) => {
            resolve(product);
        }).catch((err) => {
            reject(err);
        });
    });
}