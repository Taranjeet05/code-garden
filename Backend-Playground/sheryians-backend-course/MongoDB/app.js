const express = require("express");
const app = express();
const PORT = 1008;

app.get("/", (req, res) => {
  res.send("Hello From the HOME PAGE. Learning MongoDb.");
});

app.listen(PORT, () => {
  console.log("------------------------------------------");
  console.log(`Serever is running on ${PORT} port`);
  console.log("------------------------------------------");
});
