require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const userModel = require("./models/user");
const postModel = require("./models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

const isLoggedIn = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.redirect("/login");

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).send("Invalid token ❌").redirect("/login");
  }
};

/****************** GET RENDER INDEX ('/') ************************************* */
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  const user = await userModel.findOne({ email: req.user.email });
  res.render("profile", { user });
});

app.post("/register", async (req, res) => {
  try {
    const { userName, name, age, email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (user) return res.status(500).send("User Already Exist 👤");

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const createUser = await userModel.create({
      userName,
      name,
      email,
      age,
      password: hashPassword,
    });
    const token = jwt.sign(
      { email, emailId: createUser._id },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);

    res.redirect("/profile");
  } catch (error) {
    console.log(`something went wrong ❌ > ${error.message}`);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(401).send("Invalid credentials ❌");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).send("Invalid credentials ❌");

    const token = jwt.sign({ email, userId: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token);

    res.redirect("/profile");
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/post", isLoggedIn, async (req, res) => {
  try {
    let user = await userModel.findOne({ email: req.user.email });
    let { content } = req.body;

    let post = await postModel.create({
      user: user._id,
      content,
    });

    user.posts.push(post._id);
    await user.save();

    res.redirect("/profile");
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/logout", (req, res) => {
  try {
    res.cookie("token", "");
    res.status(200).redirect("/login");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Application is Rinning on ${PORT}`);
});
