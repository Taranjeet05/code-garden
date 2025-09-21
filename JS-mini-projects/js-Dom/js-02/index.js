const h1 = document.querySelector("h1");

window.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    h1.textContent = "🙈";
  } else if (e.key === "Enter") {
    h1.textContent = "💥";
  } else if (e.key === " ") {
    h1.textContent = "🛰️";
  } else {
    h1.textContent = e.key;
  }
});
