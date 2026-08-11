import type { Request, Response, NextFunction } from "express";
import type User from "./dtos/userDto.js";
import usersModel from "../models/userModel.js";



// create a new user
export const createNewUser = (user: User) => {
    return new Promise((resolve, reject) => {
        usersModel.create(user).then((user) => {
            resolve(user);
        }).catch((err) => {
            reject(err);
        });
    })};