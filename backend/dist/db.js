"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://Joydeep2810:joy209889@joydeep.adszdyo.mongodb.net/TODO");
const todoschema = new mongoose_1.default.Schema({
    title: { type: String },
    description: { type: String },
    completed: { type: Boolean },
});
const userschema = new mongoose_1.default.Schema({
    username: { type: String },
    password: { type: String },
});
exports.Todo = mongoose_1.default.model("Todo", todoschema);
exports.User = mongoose_1.default.model("User", userschema);
