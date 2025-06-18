const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const PORT = 1008;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  fs.readdir(`./files`, (error, files) => {
    res.render("index", { files: files });
  });
});

app.get("/file/:filename", (req, res) => {
  const { filename } = req.params;
  fs.readFile(`./files/${filename}`, "utf-8", (error, filedata) => {
    console.log(error);
    res.render("show", { filedata: filedata, filename: filename });
  });
});

app.post("/create", (req, res) => {
  const { title, description } = req.body;
  fs.writeFile(
    `./files/${title.split(" ").join("")}.txt`,
    description,
    (error) => {
      console.log(`Something went worng >> ${error}`);
      res.redirect("/");
    }
  );
});

app.get("/edit/:filename", (req, res) => {
  const { filename } = req.params;
  res.render("edit", { filename: filename });
});

app.post("/edit", (req, res) => {
  const { prevName, newName } = req.body;
  fs.rename(
    `./files/${prevName}`,
    `./files/${newName.split(" ").join("")}.txt`,
    (error) => {
      res.redirect("/");
    }
  );
});

app.listen(PORT, () => {
  console.log("--------------------------------------------");
  console.log(`server is running on the ${PORT} port.`);
  console.log("--------------------------------------------");
});
