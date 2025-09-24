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
console.log(
  "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
);
// call
let obj2 = {
  name: "call",
  age: 20,
};

function abcd(a, b, c, d, e, f, g, h) {
  console.log("call check", this.name, a, b, c, d, e, f, g, h);
}

abcd.call(obj2, 1, 2, 3, 4, 5, 6, 55, 7777);

console.log(
  "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
);
// apply
// !-- if we are sending parameters then we use apply but,
// !!-- apply will accept only the 2 parameter if we have more
// !!!-- then 2 parameter, we can send them in an array

const names = {
  name1: "joe",
  name2: "singh",
  name3: "smith",
};

function jet(a, b, c) {
  console.log(this, a, b, c);
}

jet.apply(names, [1, 21, 55]);

console.log(
  "++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
);
// bind
// !!-- bind is similar like call but will never call or run it
// !!!-- instead it will give you a function

const cars = {
  name1: "BMW",
  name2: "TATA",
  name3: "VW",
};

function car(rate1, rate2, rate3) {
  console.log(this, rate1, rate2, rate3);
}

let ratings = car.bind(cars, 5, 5, 5);
ratings();
