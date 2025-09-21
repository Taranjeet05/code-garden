let h1 = document.querySelector("h1");
let p = document.querySelector("p");

h1.addEventListener("click", () => {
  h1.style.color = "red";
});

p.addEventListener("click", () => {
  p.classList.add("green");
  p.classList.remove("yellow");
});

p.addEventListener("dblclick", () => {
  p.classList.add("yellow");
  p.classList.remove("green");
});


console.dir(p);
