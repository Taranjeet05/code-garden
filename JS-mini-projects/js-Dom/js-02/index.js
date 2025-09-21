let input = document.querySelector("input");
let h3 = document.querySelector("h3");
let sel = document.querySelector("select");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

sel.addEventListener("change", (e) => {
  console.log(e.target.value);
  h3.textContent = `${e.target.value} Device Selected`;
});
