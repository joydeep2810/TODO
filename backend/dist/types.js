"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.idSchema = exports.TodoSchema = void 0;
const zod_1 = require("zod");
exports.TodoSchema = zod_1.z.object({
    title: zod_1.z.string(),
    description: zod_1.z.string(),
});
exports.idSchema = zod_1.z.object({
    id: zod_1.z.string(),
});
exports.UserSchema = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string(),
});
