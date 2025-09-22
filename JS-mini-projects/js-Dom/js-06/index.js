const ul = document.querySelector("ul");

ul.addEventListener("click", (e) => {
  e.target.classList.toggle("lt");
});
