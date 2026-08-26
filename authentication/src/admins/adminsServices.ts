import type { Request, Response, NextFunction } from "express";
import adminModel from "../models/adminModel.js";
import type Admin from "./dtos/adminDto.js";



export const getAllAdmins = () => {
    return new Promise((resolve, reject) => {
        adminModel.find().then((admins) => {
            resolve(admins);
        }).catch((err) => {
            reject(err);
        });
    });
}

export const createAdmin = (admin: Admin) => {
        return new Promise((resolve, reject) => {
            adminModel.create(admin).then((admin) => {
                resolve(admin);
            }).catch((err) => {
                reject(err);
            });
        });
}

export const getOneAdmin = (id: string) => {
    return new Promise((resolve, reject) => {
        adminModel.findById(id).then((admin) => {
            resolve(admin);
        }).catch((err) => {
            reject(err);
        });
    })
}