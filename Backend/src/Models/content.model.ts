import mongoose, { model } from "mongoose";
import { User } from "./User.model";

const ContentSchema = new mongoose.Schema({
title:String,
link:String,
tags:{
    type:String,
   
},
userid:{
    type:mongoose.Schema.ObjectId,
    ref:User,
    required:true

}

})


export const Content =model("Content",ContentSchema)