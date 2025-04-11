const express = require("express");
const app = express();
const PORT = 1008;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.get("/", (req, res) => {
  bcrypt.compare(
    "Taranjeet Singh",
    "$2b$10$itgRilhGBNHZ6mosJh0h4e8lMv4IhYZ7.GfMcV7cXZEX9wYJZ5aEK",
    (err, result) => {
      console.log(result);
    }
  );
  res.send("Hello I am just byrpt the password");
});

app.get("/profile", (req, res) => {
  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash("INDIA", salt, (error, hash) => {
      console.log(hash);
    });
  });
  res.send("hello from Profile page");
});

app.get("/jwt", (req, res) => {
  let token = jwt.sign({ email: "taranjeet@gmail.com" }, "shhhshhh");
  console.log(token);
  res.cookie("token", token);
  res.send("Wroking on JWT token.");
});

app.get('/bcrypt', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash('Singh', salt);
  console.log(hash);

  res.send('Hash Created');
});

app.listen(PORT, () => {
  console.log(
    "---------------------------------------------------------------"
  );
  console.log(`Server is running at PORT: ${PORT}`);
  console.log(
    "---------------------------------------------------------------"
  );
});
