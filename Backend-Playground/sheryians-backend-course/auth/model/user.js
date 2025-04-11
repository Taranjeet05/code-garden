const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

mongoose
  .connect(URI)
  .then(() => console.log("✅ MongoDb is connencted"))
  .catch((error) => console.log(`❌ MOngoDb is not connected > ${error}`));

const userSchema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("User", userSchema);
