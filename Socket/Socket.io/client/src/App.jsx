import { useEffect, useState, useMemo } from "react";
import { io } from "socket.io-client";
import { Button, Container, TextField, Typography } from "@mui/material";

function App() {
  const socket = useMemo(() => io("http://localhost:5000"), []);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", message);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });

    socket.on("receive-message", (data) => {
      console.log("From Server:", data);
    });

    return () => {
      socket.off("connect");
      socket.off("receive-message");
    };
  }, [socket]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Welcome to Socket IO</Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          label="Message"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Send
        </Button>
      </form>
    </Container>
  );
}

export default App;
