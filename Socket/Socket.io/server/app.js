import express from "express";
import { Server } from "http";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

const server = new Server(app);
const io = new Server(server, {});

app.get("/", (res, req) => {
  req.send("Hello from the Socket.io");
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
