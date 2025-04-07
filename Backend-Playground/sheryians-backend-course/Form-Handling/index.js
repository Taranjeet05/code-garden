const express = require("express");
const app = express();
const path = require("path");
const PORT = 1008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

const User = [];

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create-user", (req, res) => {
  const { username, age, hobby } = req.body;
  const user = { username, age, hobby };
  User.push( user );
  res.redirect(`/profile/${username}`);
});

app.get("/profile/:username", (req, res) => {
  const { username } = req.params;
  const user = User.find((f) => f.username === username);
  if (!user) {
    return res.send("No user found");
  }
  res.render("profile", { user });
});

app.listen(PORT, () => {
  console.log(
    "---------------------------------------------------------------"
  );
  console.log(`Server is running at ${PORT} port.`);
  console.log(
    "---------------------------------------------------------------"
  );
});
