import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello from the Socket.io");
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("message", ({ message, room }) => {
    console.log("Message received:", message, room);
    socket.to(room).emit("receive-message", { message, sender: room });
  });

  socket.on("join-room", (room) => {
    console.log(room);
    socket.join(room);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
