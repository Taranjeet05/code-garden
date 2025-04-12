require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("Hello from HOME PAGE");
});

app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
