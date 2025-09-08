import express from "express";
import { createServer } from "http";
import dotenv from "dotenv";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

const server = createServer(app);

app.get("/", (res, req) => {
  req.send("Hello from the Socket.io");
});

server.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
