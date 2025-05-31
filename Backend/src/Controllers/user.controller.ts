import { User } from "../Models/User.model";
import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import Jwt from "jsonwebtoken";
import { Content } from "../Models/content.model";
const JWT_SECRET = "fdfdfdsfdfefefek";
import mongoose from "mongoose";
import { Link } from "../Models/link.mode";
import { random } from "../utils";

const requiredbody = z.object({
  email: z.string().min(3).max(100).email(),
  password: z.string(),
});

export const signuphandeler = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const parsedDatawithSuccss = requiredbody.safeParse(req.body);
  if (!parsedDatawithSuccss.success) {
    res.json({
      message: "Incorrect format",
      error: parsedDatawithSuccss.error,
    });
  }
  const hashedpassword = await bcryptjs.hash(password, 10);
  try {
    const newuser = await User.create({
      email,
      password: hashedpassword,
    });
    const token = Jwt.sign({ id: newuser._id }, JWT_SECRET);

    res.json({
      token: token,
    });
  } catch (error) {
    res.json({ success: false, message: "email already exists" });
  }
};

export const signinhandeler = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const safepaarsed = requiredbody.safeParse(req.body);
  if (!safepaarsed) {
    res.json({ success: false, message: "inputs didnot meet the credentials" });
    return;
  }

  const user = await User.findOne({ email });
  if (user) {
    const verifieduser = await bcryptjs.compare(password, user.password);
    if (!verifieduser) {
      res.status(400).json({ message: "invalid password" });
      return;
    }
    const token = Jwt.sign({ id: user._id }, JWT_SECRET);
    res.status(201).json({
      token: token,
    });
  } else res.json({ message: "Email not found" });
};

export const ContentHandeler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const link = req.body.link;
  const type = req.body.type;
  const title = req.body.title;
  const tags = req.body.tag;
  await Content.create({
    title,
    link,
    type,
    //@ts-ignore
    userId: req.UserId,
    tags,
  });
  return res.json({
    message: "content Added",
  });
};

export const getContent = async (req: Request, res: Response) => {
  //@ts-ignore
  const userid = req.UserId;
  const content = await Content.find({ userId: userid }).populate(
    "userId",
    "email"
  );

  res.json({ content });
};

export const deletecontenthandeler = async (req: Request, res: Response) => {
  const { _id } = req.body;
  try {
    const objectId = new mongoose.Types.ObjectId(_id);

    await Content.deleteOne({ _id: objectId });
    res.json({ message: "Content deleted successfully" });
  } catch (err) {
    console.error("Error deleting content:", err);
    res.status(500).json({ error: "Failed to delete content" });
  }
};

export const sharehandeler = async (req: Request, res: Response) => {
  const share = req.body.share;

  if (share) {
    const existingLink = await Link.findOne({
      userId: req.UserId,
    });

    if (existingLink) {
      return res.json({
        hash: existingLink.hash,
      });
    }

    const hash = random(10);
    await Link.create({
      userId: req.UserId,
      hash: hash,
    });

    return res.json({ hash });
  } else {
    await Link.deleteOne({
      userId: req.UserId,
    });

    return res.json({ message: "Removed link" });
  }
};

export const viewsharedhandeler = async (req: Request, res: Response) => {
  try {
    const hash = req.params.sharelink;

    const foundlink = await Link.findOne({ hash });

    if (!foundlink) {
      return res
        .status(404)
        .json({ message: "Invalid or expired share link." });
    }

    const user = await User.findById(foundlink.userId).select("email");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const content = await Content.find({ userId: foundlink.userId });

    return res.json({
      user,
      content,
    });
  } catch (error) {
    console.error("Error in viewsharedhandeler:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
