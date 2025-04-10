const mongoose = require("mongoose");

const uri = 'mongodb+srv://Atlas:Krishnaji@sandbox-cluster.k0rro7y.mongodb.net/mongopractice?retryWrites=true&w=majority&appName=sandbox-cluster'

// Connect to the local MongoDB instance
mongoose.connect(uri)
.then(() => {
  console.log('✅ Successfully connected to MongoDB!');
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Define the schema for the user
const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
