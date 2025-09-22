const textarea = document.querySelector("#message");
const count = document.querySelector("#count");

textarea.addEventListener("input", (e) => {
  let textAllowed = 50;
  let textLength = e.target.textLength;
  let remainText = textAllowed - textLength;

  if (remainText < 0) {
    count.textContent = remainText;
    count.style.color = 'red'
    return;
  }
  count.textContent = remainText;
  count.style.color = 'green'
});
