// writeFile, appendFile, copyFile, rename, unlink

const { error, log } = require('console');
const fs = require('fs');

fs.writeFile("test.txt", "Hello I am testing out the writeFile in fs", (error) => {
if(error) {
  console.log("Error occured while writing the file. ❌");
} else {
  console.log("file is created successfully, Have a look at the file. ✅")
}
});
