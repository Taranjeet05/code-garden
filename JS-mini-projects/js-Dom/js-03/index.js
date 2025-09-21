let btn = document.querySelector("#btn");
let fileInp = document.querySelector("#fileInp");

btn.addEventListener("click", () => {
  fileInp.click();
});

fileInp.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) {
    btn.textContent = file.name;
  }
});
