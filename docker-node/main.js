const express = require("express");

const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello Form the express to DOCKER");
});

app.listen(PORT, () => {
  console.log("Port is running on:", PORT);
});
