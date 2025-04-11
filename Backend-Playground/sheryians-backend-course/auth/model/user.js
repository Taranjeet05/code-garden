const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("✅ MongoDB is connected"))
  .catch((error) => console.log(`❌ MongoDB is not connected > ${error}`));

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
