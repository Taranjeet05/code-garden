// this keyword :- is a special keyword

// this : in global scope, function, method, event handler, class
// !-- this in ARROW FUNCTION ()=> means lexical scope this losses his value
// !--             and try to get its parent this value which is window or global scope
// Arrow function and lexical this
// manual binding: bind, call, apply

// !-- this in global scope
// in global scope this value is window. what is window ?
//--> In a political way widow is President who hold all the power
console.log(this); // window

// !-- this in function
// same like in the global scope the value of this in function is window
function test() {
  console.log("this in function:", this);
}
test();

// !-- this in method

const obj = {
  name: "joe",
  sayName: function () {
    console.log("this in method:", this);
  },
};
obj.sayName(); // this === obj

// !-- this in event handler
document.querySelector("h1").addEventListener("click", function () {
  console.log("this in event handler:", (this.style.color = "red"));
}); // this === h1

// !-- this in class

class Abcd {
  constructor() {
    console.log("inside constructor");
    this.a = 12;
    this.b = 13;
  }
}

let val = new Abcd(); // this === blankObject {}
console.log(val); // {a:12, b:13}

// !-- this in global scope - window
// !-- this in function - window
// !-- this in es5 function - object
// !-- this in es6 arrow function - window
// !-- this in function inside es5 method - object
// !-- this in arrow function inside es5 method - object
// !-- this in event handler - element
// !-- this in class - blank object

//***************************************************** */

// call, apply, and bind
