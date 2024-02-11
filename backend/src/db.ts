
import mongoose from "mongoose";
import { boolean, string } from "zod";

mongoose.connect("mongodb+srv://Joydeep2810:joy209889@joydeep.adszdyo.mongodb.net/TODO")


const todoschema =new mongoose.Schema({
    title:string,
    description:string,
    completed:boolean
})

const userschema =new mongoose.Schema({
    username:string,
    password:string,
})

export const Todo = mongoose.model("Todo",todoschema)
export const User = mongoose.model("User",userschema)
