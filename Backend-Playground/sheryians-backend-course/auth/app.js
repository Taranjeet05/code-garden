require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 1008;
const path = require("path");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const userModel = require("./model/user");
const jwt = require("jsonwebtoken");
const user = require("./model/user");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/profile", (req, res) => {
  res.send("Profile PAGE");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/create", async (req, res) => {
  const { name, age, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    let createUser = await userModel.create({
      name,
      age,
      email,
      password: hash,
    });

    let token = jwt.sign({ email }, "sssssssssshhhhhhhhhhhhhhhhhhhhh");

    res.cookie("token", token);

    res.redirect("/profile");
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) return res.send("User not found");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.send("Invalid credentials");

    let token = jwt.sign({ email }, "sssssssssshhhhhhhhhhhhhhhhhhhhh");
    res.cookie("token", token);
    return res.redirect("/profile");
  } catch (error) {
    console.log("❌ Error:", error.message);
    res.send("Internal Server Error");
  }
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

app.listen(PORT, () => {
  console.log(
    "-------------------------------------------------------------------------------------------------------------------------------------------------------"
  );
  console.log(`Server is running >> ${PORT}`);
  console.log(
    "-------------------------------------------------------------------------------------------------------------------------------------------------------"
  );
});
