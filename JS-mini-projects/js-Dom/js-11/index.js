const btn = document.querySelector("#toggleTheme");

const applyTheme  = () => {

  let theme = localStorage.getItem("theme");

  if (!theme) {
     theme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-schema : dark)").matches
        ? "dark"
        : "light";
    localStorage.setItem("theme", `${theme}`);
  }
  document.body.classList.add(theme);
  return;
};

applyTheme()

btn.addEventListener("click", () => {
  const current = localStorage.getItem("theme");
  const newTheme  = current === "dark" ? "light" : "dark";
  localStorage.setItem("theme", `${newTheme }`);
  document.body.classList.replace(current, newTheme);;
});
