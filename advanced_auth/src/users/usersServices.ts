import type { Request, Response, NextFunction } from "express";
import type User from "./dtos/userDto.js";
import usersModel from "../models/usersModel.js";


// get all users
export const getAllUsers = () => {
        return new Promise((resolve, reject) => {
            usersModel.find().then((users) => {
                resolve(users);
            }).catch((err) => {
                reject(err);
            });
        });
}


// create a new user
export const createNewUser = (user: User) => {
    return new Promise((resolve, reject) => {
        usersModel.create(user).then((user) => {
            resolve(user);
        }).catch((err) => {
            reject(err);
        });
    });
     
}


// get one user
export const getOneUser = (id: string) => {
        return new Promise((resolve, reject) => {
            usersModel.findById(id).then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
}


// delete one user
export const deleteOneUser = (id: string) => {
        return new Promise((resolve, reject) => {
            usersModel.findByIdAndDelete(id).then(() => {
                resolve("User deleted");
            }).catch((err) => {
                reject(err);
            });
        });
}


// update one user
export const updateOneUser = (id: string, params: User) => {
        return new Promise((resolve, reject) => {
            usersModel.findByIdAndUpdate(id, params).then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
}


