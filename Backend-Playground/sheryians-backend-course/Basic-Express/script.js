const express = require("express");
const app = express();
const Port = 1008;

app.get("/", (req, res) => {
  res.send(`
    Hello world, I am creating My first Express Server.<br>
    ---------------------------------------------------<br>
    You are currently on the Home page.<br>
    ---------------------------------------------------
  `);
});

app.listen(Port, () => {
  console.log("------------------------------------------------------------");
  console.log(`Server is running on http://localhost:${Port}`);
  console.log("------------------------------------------------------------");
});
