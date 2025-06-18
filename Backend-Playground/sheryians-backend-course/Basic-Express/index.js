const express = require("express");
const app = express();
const port = 1008;

app.use((req, res, next) => {
  console.log("------------------------------------------------");
  console.log("Middleware is running");
  console.log("Request URL:", req.url);
  console.log("------------------------------------------------");
  console.log("Request Method:", req.method);
  console.log("------------------------------------");
  console.log("Request Path:", req.path);
  console.log("------------------------------------");

  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!, We are in HOME PAGE.");
});

app.get("/profile", (req, res, next) => {
  return next(new Error("This is a custom error"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke! , please try again later.");
  console.log("------------------------------------------------");
});

app.listen(port, () => {
  console.log("------------------------------------------------");
  console.log(`Server is running on http://localhost:${port}`);
  console.log("------------------------------------------------");
});
