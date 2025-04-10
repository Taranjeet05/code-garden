const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("✅ DATABASE is connected successfully"))
  .catch((error) => console.log(`❌ Something Wrong with the Database`, error));

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  imageUrl: { type: String },
});

module.exports = mongoose.model("User", userSchema);
