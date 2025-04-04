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

export const getAllTodos : RequestHandler = (req, res) => {
  
  if(TODO.length === 0){
    res.status(200).json({message: "No todos found"});
    return;
  }
  res.status(200).json({message: "todoa Fetched Successfully", TODO});
}