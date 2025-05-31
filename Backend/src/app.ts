import express, { Request, Response } from "express";
import { Userrouter } from "./routes/user.routes";

export const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("hi there");
});

app.use("/api/v1/user", Userrouter);
