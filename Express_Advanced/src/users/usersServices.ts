import type { Request, Response, NextFunction } from "express";
import type User from "./dtos/userDto.js";
import usersModel from "../models/usersModel.js";

export const getAllUsers = () => {
        return new Promise((resolve, reject) => {
            usersModel.find().then((users) => {
                resolve(users);
            }).catch((err) => {
                reject(err);
            });
        });
}

export const getOneUser = (id: string) => {
        return new Promise((resolve, reject) => {
            usersModel.findById(id).then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
}

export const deleteOneUser = (id: string) => {
        return new Promise((resolve, reject) => {
            usersModel.findByIdAndDelete(id).then(() => {
                resolve("User deleted");
            }).catch((err) => {
                reject(err);
            });
        });
}

export const updateOneUser = (id: string, params: User) => {
        return new Promise((resolve, reject) => {
            usersModel.findByIdAndUpdate(id, params).then((user) => {
                resolve(user);
            }).catch((err) => {
                reject(err);
            });
        });
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