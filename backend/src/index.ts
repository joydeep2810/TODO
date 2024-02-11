import express from "express";
import { Todo, User } from "./db";
import { UserSchema, TodoSchema, idSchema } from "./types";
import { Schema } from "zod";

const app = express();

app.use(express.json());

//For adding Todos
app.post("/dashboard", async function (req, res) {
  const schema = req.body;

  const response = TodoSchema.safeParse(schema);

  if (!response.success) {
    res.json({
      msg: "Wrong Inputs",
    });
  } else {
    await Todo.create({
      title: schema.title,
      description: schema.description,
      completed: false,
    });

    res.json({
      msg: "Todo Added Successfully",
    });
  }
});

//For getting all the existing TODO
app.get("/all", async function (req, res) {
  const alltodos = await Todo.find({});

  res.json({ alltodos });
});

//Mark as Done
app.put("/completed", async function (req, res) {
  const id = req.body;

  const response = idSchema.safeParse(id);

  if (!response.success) {
    res.json({
      msg: "ID not found",
    });
  } else {
    await Todo.updateOne(
      {
        _id: id,
      },
      {
        completed: true,
      }
    );
    res.json({
      msg: "Done",
    });
  }
});

//Delete TODOs
app.delete("/delete", async function (req, res) {
  const schema = req.body;

  const response = idSchema.safeParse(schema);

  if (!response.success) {
    res.json({
      msg: "ID not found",
    });
  } else {
    await Todo.findOneAndDelete({ _id: schema.id });
    res.json({
      msg: "Deleted",
    });
  }
});

app.listen(3000);
