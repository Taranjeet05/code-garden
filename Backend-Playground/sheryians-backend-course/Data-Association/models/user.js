const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("✅ MONGODB is Connected"))
  .catch((error) => {
    console.log(`❌ Something went Wrong >> ${error}`);
  });

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: "default.png",
  },
});

module.exports = mongoose.model("User", userSchema);
