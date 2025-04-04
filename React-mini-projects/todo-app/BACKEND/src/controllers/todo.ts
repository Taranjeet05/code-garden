import { RequestHandler } from "express";
import { Todo } from "../models/todo";

const TODO: Todo[] = [];

export const createTodo: RequestHandler = (req, res) => {
  const { title, description } = req.body as {
    title: string;
    description: string;
  };

  if (!title || !description) {
    res.status(400).json({ message: "Please provide title and description" });
    return;
  }

  const newTodo = new Todo(
    Math.random().toString(),
    title,
    description,
    false,
    new Date(),
    new Date()
  );
  TODO.push(newTodo);
  res.status(201).json({ message: "Todo Created Successfully", newTodo });
};
