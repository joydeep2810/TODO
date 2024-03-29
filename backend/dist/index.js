"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./db");
const types_1 = require("./types");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/dashboard", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = req.body;
        const response = types_1.TodoSchema.safeParse(schema);
        if (!response.success) {
            res.json({
                msg: "Wrong Inputs",
            });
        }
        else {
            yield db_1.Todo.create({
                title: schema.title,
                description: schema.description,
                completed: false,
            });
            res.json({
                msg: "Todo Added Successfully",
            });
        }
    });
});
app.get("/all", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const alltodos = yield db_1.Todo.find({});
        res.json({ alltodos });
    });
});
app.put("/completed", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = req.body;
        const response = types_1.idSchema.safeParse(schema);
        if (!response.success) {
            res.json({
                msg: "ID not found",
            });
        }
        else {
            yield db_1.Todo.findByIdAndUpdate({ _id: schema.id }, { completed: true }, { new: true });
            res.json({
                msg: "Done",
            });
        }
    });
});
app.delete("/delete", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = req.body;
        const response = types_1.idSchema.safeParse(schema);
        if (!response.success) {
            res.json({
                msg: "ID not found",
            });
        }
        else {
            yield db_1.Todo.findOneAndDelete({ _id: schema.id });
            res.json({
                msg: "Deleted",
            });
        }
    });
});
app.listen(3000);
