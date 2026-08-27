import express from "express";
import type { Request, Response, NextFunction } from "express";
import AdminAuthMiddleware from "../middlewares/adminAuthMiddleware.js";

const router = express.Router();



// get all posts
router.get("/", AdminAuthMiddleware, (req: Request, res: Response) => {
  console.log("posts page log.");
  res.send("posts page");
});

// get one post

// create a new post

// update a post

// delete a post


export default router;