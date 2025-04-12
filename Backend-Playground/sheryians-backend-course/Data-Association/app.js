require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userModel = require("./models/user");
const postModel = require("./models/post");
const path = require("path");
const post = require("./models/post");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
