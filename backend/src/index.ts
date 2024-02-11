
import express from "express";
import { Todo,User } from "./db";

const app = express()

app.use(express.json())

//For adding Todos
app.post("/dashboard",function(req,res){
    res.json({})
})

//For getting all the existing TODO
app.get("/get",function(req,res){
    res.json({})
})

//Mark as Done 
app.put("/completed",function(req,res){
    res.json({})
})

//Delete TODOs
app.delete("/delete",function(req,res){
    res.json({})
})

app.listen(3000)