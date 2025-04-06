// writeFile, appendFile, copyFile, rename, unlink, rm, mkdir, readDir,

const { error, log } = require("console");
const fs = require("fs");

fs.writeFile(
  "test.txt",
  "Hello I am testing out the writeFile in fs",
  (error) => {
    if (error) {
      console.log("Error occured while writing the file. ❌");
    } else {
      console.log("file is created successfully, Have a look at the file. ✅");
    }
  }
);

fs.appendFile(
  "test.txt",
  "/n I am appending this text to the file",
  (error) => {
    if (error) {
      console.log("Error occured while appending the file. ❌");
    } else {
      console.log(`File is appended successfully, Have a look at the file ✅`);
    }
  }
);

fs.rename("test.txt", "rename.txt", (error) => {
  if (error) {
    console.log("Error occured while renaming the file. ❌");
  } else {
    log("File Reanmed successfully, Have a look at the file name ✅");
  }
});

fs.copyFile("rename.txt", "./copy/copy.txt", (error) => {
  if (error) {
    console.log("Error occured while copying the file. ❌");
  } else {
    console.log(
      "File copied successfully to the copy folder, Have a look at the file. ✅"
    );
  }
});

fs.unlink("rename.txt", (error) => {
  if (error) {
    console.log("Error occured while deleting the file. ❌");
  } else {
    console.log("File deleted successfully, Have a look at the file. ✅");
  }
});

fs.rm("./copy", { recursive: true }, (error) => {
  if (error) {
    console.log("Error occured while deleting the folder. ❌");
  } else {
    console.log("Folder deleted successfully, Have a look at the folder. ✅");
  }
});

fs.mkdir("./newFolder", { recursive: true }, (error) => {
  if (error) {
    console.log("Error occured while creating the folder. ❌");
  } else {
    console.log("Folder created successfully, Have a look at the folder. ✅");
  }
});

fs.readdir("./newFolder", (error, files) => {
  if (error) {
    console.log("Error occured while reading the folder. ❌");
  } else {
    console.log("Files:", files);
  }
});
