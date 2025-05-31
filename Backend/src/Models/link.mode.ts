import mongoose from "mongoose";
import { User } from "./User.model";
const linkshchema = new mongoose.Schema({
  hash: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: User,
  },
});

export const Link = mongoose.model("Link", linkshchema);
