import type { Request, Response, NextFunction } from "express";
import type RegisterDto from "./dtos/registerDto.js";
import usersModel from "../models/usersModel.js";
import bcrypt from "bcrypt";

export const register = async(data: RegisterDto) => {
    try{
        const user = await usersModel.findOne({email: data.email});
        if (user) throw new Error("user already exists");
        const hashPassword = await bcrypt.hash(data.password, 20);
        console.log(hashPassword);
        const newUser = await usersModel.create({...data, password : hashPassword});
        newUser.save(); 
        return newUser
    }catch (err: any) {
        console.log(err.message)
    }
}



