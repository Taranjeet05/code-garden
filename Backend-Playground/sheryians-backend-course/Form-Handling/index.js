const express = require("express");
const app = express();

const PORT = 1008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello We are at HOME PAGE.");
});

app.listen(PORT, () => {
  console.log("------------------------------------------------------");
  console.log(`The server is running at port: ${PORT}`);
  console.log("------------------------------------------------------");
});
