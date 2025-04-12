require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userModel = require("./models/user");
const postModel = require("./models/post");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/post", (req, res) => {
  res.send("Welcome to the POST PAGE");
});

app.post("/register", async (req, res) => {
  try {
    const { userName, name, age, email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (user) return res.status(500).send("User Already Exist");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const createUser = await userModel.create({
      userName,
      name,
      age,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign(
      { userID: createUser._id, email },
      process.env.JWT_SECRET
    );
    res.cookie("token", token);
    res.redirect("/post");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
