import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

export const Usermiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];
  const decoded = Jwt.verify(header as string, JWT_SECRET);
  if (decoded) {
    //@ts-ignore
    req.UserId = decoded.id;
    next();
  } else {
    res.status(403).json({ message: "you are not logged in " });
  }
};
