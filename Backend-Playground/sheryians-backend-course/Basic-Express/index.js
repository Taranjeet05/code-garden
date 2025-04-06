const express = require("express");
const app = express();
const port = 1008;

app.get("/", (req, res) => {
  res.send("Hello World!, We are in HOME PAGE.");
});

app.listen(port, () => {
  console.log("------------------------------------------------");
  console.log(`Server is running on http://localhost:${port}`);
  console.log("------------------------------------------------");
});
