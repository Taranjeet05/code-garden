const form = document.querySelector("form");
const titleInput = form.querySelector("input");
const messageTextarea = form.querySelector("textarea");
const header = document.querySelector("header");

const main = document.querySelector("#main");

titleInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    messageTextarea.focus();
  }
});

messageTextarea.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    submitForm();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm();
});

const submitForm = () => {
  const title = titleInput.value.trim();
  const message = messageTextarea.value.trim();

  const oldSpan = header.querySelector("span");
  if (oldSpan) oldSpan.remove();

  if (title.length < 3 || message.length < 3) {
    let span = document.createElement("span");
    span.style.color = "red";
    span.textContent = "Both Title and Message must be 3 characters long";
    header.append(span);
    return;
  }

  const note = document.createElement("div");
  note.classList.add("note");

  const h2 = document.createElement("h2");
  h2.classList.add("note-title");
  h2.textContent = title;

  const p = document.createElement("p");
  p.classList.add("note-message");
  p.textContent = message;

  note.append(h2, p);
  main.appendChild(note);

  form.reset();
  titleInput.focus();
};
