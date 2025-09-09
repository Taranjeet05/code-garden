import { useEffect } from "react";
import { io } from "socket.io-client";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useMemo } from "react";

function App() {
  const socket = useMemo(() => io("http://localhost:5000"), []);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    setMessage("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });

    socket.on("message", (data) => {
      console.log(data);
    });

    socket.on("Get-Message", (data) => {
      console.log(data);
    });

    socket.on("message2", (m) => {
      console.log("message2", m);
    });

    return () => {
      socket.off("connect");
      socket.off("message");
      socket.off("Get-Message");
      socket.off("message2");
    };
  }, [socket]);

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h1" component="div">
          Welcome to Socket IO
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            id="outline-basics"
            variant="outlined"
            label="outlined"
          />
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </form>
      </Container>
    </>
  );
}

export default App;
