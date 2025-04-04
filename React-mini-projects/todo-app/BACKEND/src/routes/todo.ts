import express from "express";
import { createTodo } from "../controllers/todo";

const router = express.Router();

router.route("/").post(createTodo); // Create a new todo
//router.route("/").get(); // Get all todos
//router.route("/:todoId").patch(); // Update a todo
//router.route("/:todoId").delete(); // Delete a todo


export default router;