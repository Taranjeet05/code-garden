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
const upload = require("./config/multerConfig.js");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

/****************** MIDDLEWARE FOR PROTECTION OF ROUTES************************************* */

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
  if (req.cookies.token) {
    return res.redirect("/profile");
  }
  res.render("index");
});

/****************** GET upload profile pic INDEX ('/profile/upload') ************************************* */

app.get("/profile/upload", (req, res) => {
  res.render("profileUpload");
});

/****************** post upload for the profile pic ('/upload') ************************************* */

app.post("/upload", isLoggedIn, upload.single("avatar"), async (req, res) => {
  const user = await userModel.findOne({ email: req.user.email });
  user.profilePic = req.file.filename;
  await user.save();
  res.redirect("/profile");
});

/****************** GET RENDER LOGIN ('/login') ************************************* */
app.get("/login", (req, res) => {
  if (req.cookies.token) {
    return res.redirect("/profile");
  }
  res.render("login");
});

/****************** GET RENDER profile ('/profile') ************************************* */
app.get("/profile", isLoggedIn, async (req, res) => {
  const user = await userModel
    .findOne({ email: req.user.email })
    .populate("posts");
  res.render("profile", { user, currentUserId: req.user.userId });
});

/****************** POST REGISTER ('/register') ************************************* */

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

/****************** POST LOGIN ('/login') ************************************* */

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

/****************** POST POSTS ('/post') ************************************* */

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

/****************** GET Delete post ('/delete/:postId') ************************************* */

app.get("/delete/:id", isLoggedIn, async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postModel.findById(postId);

    if (!post) return res.status(404).send("Post not found");

    if (post.user.toString() !== req.user.userId)
      return res.status(403).send("❌ Not authorized");

    await postModel.findByIdAndDelete(postId);
    await userModel.findByIdAndUpdate(post.user, {
      $pull: { posts: postId },
    });

    res.redirect("/profile");
  } catch (error) {
    console.error("❌ Error deleting post:", error);
    res.status(500).send("Something went wrong");
  }
});

/****************** GET Like post ('/like/:postId') ************************************* */

app.get("/like/:postId", isLoggedIn, async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await postModel.findOne({ _id: postId }).populate("user");

    const userId = req.user.userId;

    const index = post.likes.indexOf(userId);

    if (index === -1) {
      post.likes.push(userId);
    } else {
      post.likes.splice(index, 1);
    }

    await post.save();
    res.redirect("/profile");
  } catch (error) {
    console.log("❌ Error in like route:", error.message);
    res.status(500).send("Server Error");
  }
});

/****************** GET Edit post ('/edit/:postId') ************************************* */

// Edit route
app.get("/edit/:id", isLoggedIn, async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await postModel.findById(postId);

    if (!post) {
      return res.status(404).send("Post not found.");
    }

    // Check if the logged-in user is the author of the post
    if (post.user.toString() !== req.user.userId.toString()) {
      return res.status(403).send("You are not authorized to edit this post.");
    }

    res.render("edit", { post });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

/****************** POST Edit Post ('/edit/id') ************************************* */
app.post("/edit/:id", isLoggedIn, async (req, res) => {
  try {
    const postId = req.params.id;
    const { content } = req.body;

    const post = await postModel.findById(postId);

    if (!post) {
      return res.status(404).send("Post not found.");
    }

    // Check if the logged-in user is the author of the post
    if (post.user.toString() !== req.user.userId.toString()) {
      return res.status(403).send("You are not authorized to edit this post.");
    }

    post.content = content;
    await post.save();

    res.redirect("/profile");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

/****************** GET LOGOUT profile ('/logout') ************************************* */

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
