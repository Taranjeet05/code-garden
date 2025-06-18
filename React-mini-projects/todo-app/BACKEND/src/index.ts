import { NextFunction, Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todo";

const app = express();

const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// middleware to handle todo routes

app.use("/todos", todoRoutes);

// middleware to handle errors to any other requests.

app.use((error : Error, req : Request, res : Response, next: NextFunction) => {
  res.status(500).json({message: error.message});
  next();
})





app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

