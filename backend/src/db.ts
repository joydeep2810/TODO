import mongoose from "mongoose";
import { boolean } from "zod";

mongoose.connect(
  "mongodb+srv://Joydeep2810:joy209889@joydeep.adszdyo.mongodb.net/TODO"
);

interface T {
  title: String;
  description: String;
  completed: Boolean;
}

const todoschema = new mongoose.Schema<T>({
  title: { type: String },
  description: { type: String },
  completed: { type: String },
});

interface U {
  username: String;
  password: String;
}

const userschema = new mongoose.Schema<U>({
  username: { type: String },
  password: { type: String },
});

export const Todo = mongoose.model("Todo", todoschema);
export const User = mongoose.model("User", userschema);
