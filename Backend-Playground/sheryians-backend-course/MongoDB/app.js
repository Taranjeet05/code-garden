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
  res.render("read", { users: readUser });
});

app.post("/create", async (req, res) => {
  const { name, email, imageUrl } = req.body;
  let createUser = await userModel.create({
    name,
    email,
    imageUrl,
  });
  res.redirect("/read");
});

app.get("/edit/:id", async (req, res) => {
  const { id } = req.params;
  let user = await userModel.findOne({ _id: id });
  res.render("edit", { user });
  console.log(user);
});

app.post("/update/:id", async (req, res) => {
  const { name, email, imageUrl } = req.body;
  const { id } = req.params;
  let updateUser = await userModel.findOneAndUpdate(
    { _id: id },
    { name, email, imageUrl },
    { new: true }
  );
  res.redirect("/read");
});

app.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  let deleteUser = await userModel.findOneAndDelete({ _id: id });
  res.redirect("/read");
});

app.listen(PORT, () => {
  console.log("*************************************************************");
  console.log(`SERVER IS RUNNING PORT: ${PORT}`);
  console.log("*************************************************************");
});
