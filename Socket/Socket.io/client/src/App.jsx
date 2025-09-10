import { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

function App() {
  const socket = useMemo(() => io("http://localhost:5000"), []);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketId, setSocketId] = useState("");
  const [messageArr, setMessageArr] = useState([]);
  const [roomName, setRoomName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", { message, room });
      setMessage(roomName);
    }
  };

  const joinRoomHandler = (e) => {
    e.preventDefault();
    socket.emit("join-room", roomName);
    setRoomName("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("Connected to server:", socket.id);
    });

    socket.on("receive-message", (data) => {
      console.log("From Server:", data);
      setMessageArr((arr) => [...arr, data]);
    });

    return () => {
      socket.off("connect");
      socket.off("receive-message");
    };
  }, [socket]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Welcome to Socket IO</Typography>
      <Typography variant="h5" component="div" gutterBottom>
        {socketId}
      </Typography>

      <form onSubmit={joinRoomHandler}>
        <h5>Join Room</h5>
        <TextField
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
          variant="outlined"
          label="Room Name"
          fullWidth
        />
        <Button type="submit" variant="contained" color="secondary">
          Join
        </Button>
      </form>

      <form onSubmit={handleSubmit}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          label="Message"
          fullWidth
        />

        <TextField
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          variant="outlined"
          label="Room"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
      <Box>
        {messageArr.map((msg, index) => (
          <Typography key={index}>{msg.message}</Typography>
        ))}
      </Box>
    </Container>
  );
}

export default App;
