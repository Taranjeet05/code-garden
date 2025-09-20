// task 1 = select the heading of a page by ID and change its text to
// 'Welcome to Sheryians'

const h1 = document.querySelector("#id");

h1.innerText = "Welcome to Sheryians coding school";

// task 2 = select all <li> elements and print their text using a loop.

let liList = document.querySelectorAll("li");

for (let i = 0; i < liList.length; i++) {
  console.log(liList[i].textContent);
}

// task 3 = select a paragraph and replace its content with:
// {  <b> updated </b> by javascript  }

const p = document.querySelector("p");

p.innerHTML = "<b> updated </b> by Javascript";

// how to get an src of an img

const img = document.querySelector("img");

console.log(img.getAttribute("src"));

// what does setAttribute does ?

// It will set the attribute of anything what we select for example

document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://plus.unsplash.com/premium_photo-1669387727429-0a444196038d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmhhcmF0fGVufDB8fDB8fHww"
  );

// remove the disabled attribute from a button.
document.querySelector("button").removeAttribute("disabled");

// what does createElement() do ? what's returned ?

let h1element = document.createElement("h1");

h1element.textContent = "Create Element Done";

document.body.appendChild(h1element);

// remove an element using removeChild() ?

document.body.removeChild(document.querySelector("img"));

// create a new list item <li>New Task </li> and add it to the end of a <ul>.

const li = document.createElement("li");

li.textContent = "NEW TASK";

document.querySelector("ul").appendChild(li);

// create a new img element with a placeholder source and add it at the top of a div.

const div = document.createElement("div");
const img2 = document.createElement("img");
const pp = document.createElement("p");

img2.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1710225358761-4f5891df657d?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
);

img2.classList.add("placeholder");

pp.textContent = "Hello, This is a paragraph in a div. OHH yeah";

div.append(img2, pp);
document.body.append(div);

// select the first item in a list and delete it from the DOM.

const ul = document.querySelector("ul");

const li01 = document.querySelector("li");

ul.removeChild(li01);
