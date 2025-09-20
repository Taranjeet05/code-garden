// task 1 = select the heading of a page by ID and change its text to
// 'Welcome to Sheryians'

const h1 = document.querySelector("#id");

h1.innerText = "Welcome to Sheryians coding school";

// task 2 = select all <li> elements and print their text using a loop.

let liList = document.querySelectorAll('li');

for (let i = 0; i < liList.length; i++){
    console.log(liList[i].textContent)
}

