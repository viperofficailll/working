import express from "express";
import {
  ContentHandeler,
  deletecontenthandeler,
  getContent,
  sharehandeler,
  signinhandeler,
  signuphandeler,
  viewsharedhandeler,
} from "../Controllers/user.controller";
import { Usermiddleware } from "../middleware/user.auth";

export const Userrouter = express.Router();

Userrouter.post("/signup", signuphandeler);
Userrouter.post("/signin", signinhandeler);

Userrouter.post("/content", Usermiddleware, ContentHandeler);
Userrouter.get("/content", Usermiddleware, getContent);
Userrouter.delete("/content", Usermiddleware, deletecontenthandeler);

Userrouter.get("/getshared/:sharelink", viewsharedhandeler);
Userrouter.post("/share", Usermiddleware, sharehandeler);
