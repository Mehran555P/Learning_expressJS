import type { Request, Response, NextFunction } from "express";
import type User from "./dtos/userDto.js";
import usersModel from "../models/usersModel.js";

export const getAllUsers = async() => {
    console.log("get all users");
    // if (true) {
    //     throw new Error("no users find yet");
    // }
    return [];
}

export const createNewUser = (user: User) => {
    return new Promise((resolve, reject) => {
        usersModel.create(user).then((user) => {
            resolve(user);
        }).catch((err) => {
            reject(err);
        });
    });
     
}