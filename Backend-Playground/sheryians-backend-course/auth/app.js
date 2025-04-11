const express = require("express");
const app = express();
const PORT = 1008;

app.get("/", (req, res) => {
  res.send("HOME Page.");
});

app.listen(PORT, () => {
  console.log(
    "---------------------------------------------------------------"
  );
  console.log(`Server is running at PORT: ${PORT}`);
  console.log(
    "---------------------------------------------------------------"
  );
});
