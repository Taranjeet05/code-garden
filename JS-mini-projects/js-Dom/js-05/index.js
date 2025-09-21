const div = document.querySelector("#random");

window.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
  div.style.top = e.clientY + "px";
  div.style.left = e.clientX + "px";
});
