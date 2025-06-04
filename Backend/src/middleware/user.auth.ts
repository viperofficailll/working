import { NextFunction, Request, Response } from "express";
import Jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";

interface JwtPayload {
  id: string;
}

export const Usermiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers["authorization"];

  if (!header) {
     res.status(403).json({ message: "Authorization header missing" });
     return
  }

  try {
    const decoded = Jwt.verify(header, JWT_SECRET) as JwtPayload;
    req.UserId = decoded.id;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
