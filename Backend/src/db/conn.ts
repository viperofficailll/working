import mongoose from "mongoose";
import { MONGO_URI } from "../config";
export const conn = async () => {
  try {
    await mongoose.connect(`${MONGO_URI}`, { dbName: "Brainly" });
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connecting to the db", error);
  }
};
