require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const PORT = 1008;
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/read", async (req, res) => {
  
  const readUser = await userModel.find();
  res.render("read", {users : readUser});
});

app.post("/create", async (req, res) => {
  const { name, email, imageUrl } = req.body;
  let createUser = await userModel.create({
    name,
    email,
    imageUrl
  });
  res.redirect('/read');
});

app.listen(PORT, () => {
  console.log("*************************************************************");
  console.log(`SERVER IS RUNNING PORT: ${PORT}`);
  console.log("*************************************************************");
});
