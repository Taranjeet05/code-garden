import express from "express";
import { createTodo, deleteTodo, getAllTodos, updateTodo } from "../controllers/todo";

const router = express.Router();

router.route("/").post(createTodo); // Create a new todo
router.route("/").get(getAllTodos); // Get all todos
router.route("/:todoId").patch(updateTodo); // Update a todo
router.route("/:todoId").delete(deleteTodo); // Delete a todo


export default router;