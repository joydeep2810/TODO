import { z } from "zod";

//Declaring Validations for user inputs
export const TodoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const idSchema = z.object({
  id: z.string(),
});

export const UserSchema = z.object({
  username: z.string(),
  password: z.string(),
});
