let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  const profilePic = form.get("profile-pic");
  const name = form.get("name");
  const status = form.get("status");
  const message = form.get("message");

  let card = document.createElement("div");
  card.classList.add("card");

  let profileDiv = document.createElement("div");
  profileDiv.classList.add("profile-pic");

  let img = document.createElement("img");
  img.setAttribute("src", profilePic);
  img.setAttribute("alt", `${name}'s profile picture`);

  let h3 = document.createElement("h3");
  h3.textContent = name;
  let h5 = document.createElement("h5");
  h5.textContent = status;
  let p = document.createElement("p");
  p.textContent = message;

  profileDiv.appendChild(img);
  card.appendChild(profileDiv);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  let main = document.querySelector("#main");
  main.appendChild(card);

  form.reset()
});
