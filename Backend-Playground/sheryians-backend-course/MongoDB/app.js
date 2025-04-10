const express = require("express");
const app = express();
const PORT = 1008;

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("Hello From the HOME PAGE. Learning MongoDb.");
});

// Create a user and save it to the database
app.get("/create", async (req, res) => {
  try {
    let userCreated = await userModel.create({
      name: "Taranjeet Singh",
      username: "singhIsFromIndia",
      email: "india@gmail.com",
    });
    console.log("User Created:", userCreated); 
    res.send(userCreated);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send("Error creating user");
  }
});


// Read one user from the database
app.get('/read-one', async (req, res) => {
  let readOneUser = await userModel.findOne({name: 'Taranjeet Singh'});
  res.send(readOneUser);
});

// Read all users from the database
app.get('/read-all', async (req, res) => {
  let readAllUsers = await userModel.find();
  res.send(readAllUsers);
});

// Update user data
app.get('/update', async (req, res) => {
  let updateUser = await userModel.findOneAndUpdate({name: 'Taranjeet Singh'}, {username: 'Singh'}, {new: true});
  res.send(updateUser);
});

// Delete a user
app.get('/delete', async (req, res) => {
  let deleteUser = await userModel.findOneAndDelete({name: 'Taranjeet Singh'});
  res.send(deleteUser);
});

app.listen(PORT, () => {
  console.log("------------------------------------------");
  console.log(`Server is running on ${PORT} port`);
  console.log("------------------------------------------");
});
