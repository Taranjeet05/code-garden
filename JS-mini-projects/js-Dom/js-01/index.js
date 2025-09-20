const h1 = document.querySelector("h1");
let a = document.querySelector("a");
let img = document.querySelector("img");

img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1730904631875-10bee14067eb?q=80&w=428&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

console.log(a.getAttribute("href"));
a.removeAttribute("href");

console.dir(a)

h1.innerHTML = "<i>hey, Bharat</>";
console.dir(h1);
