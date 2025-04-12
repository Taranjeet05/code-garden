require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const userModel = require("./models/user");
const postModel = require("./models/post");
const post = require("./models/post");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello from HOME PAGE");
});

app.get("/create", async (req, res) => {
  let createUser = await userModel.create({
    userName: "Taranjeet Singh",
    email: "Taranjeet@t.com",
    age: 20,
  });
  res.send(createUser);
});

app.get("/post/create", async (req, res) => {
  let createPost = await postModel.create({
    postData: "Hello kaaise hoo aap sab",
    user: "67f9da699bd163280f19b241",
  });
  let user = await userModel.findOne({ _id: "67f9da699bd163280f19b241" });
  user.posts.push(createPost._id);
  await user.save();

  res.send({ createPost, user });
});

app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`);
});
