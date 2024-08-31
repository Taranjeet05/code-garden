
function calculateTax (cost, taxPercent = 0.1) {
  console.log(cost * taxPercent); 
}

calculateTax(2000, 0.2);
calculateTax(5000,);   

function greet (name) {
  console.log(`Hello, ${name}`);

  if (!name) {
    console.log('Hi,There');
  }
}

greet('Taranjeet Singh');
greet('Simon');
greet();


function convertToFahrenheit(celsius) {
   return ((celsius * 9 / 5) + 32);
}

console.log(convertToFahrenheit(25));


function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5 / 9 );
}

console.log(convertToCelsius(86));


function convertTheTemperature (degrees, units) {

  if (units === 'c') {
    const result = convertToFahrenheit(degrees);
    return `${result} F`;
  } else if (units === 'F') {
    const result = convertToCelsius(degrees);
    return `${result} C`;
  }
}


console.log(convertTheTemperature(25, 'c'));
console.log(convertTheTemperature(86 , 'F'));



function convertLength(length, from, to) {
  // I like to put invalid checks at the top since it's a bit
  // easier to see. Also, if something is invalid, we can skip
  // the rest of the function.
  if (from !== 'km' && from !== 'miles' && from !== 'ft') {
    return `Invalid unit: ${from}`;
  } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
    return `Invalid unit: ${to}`;
  }
  
  if (from === 'km' && to === 'miles') {
    return `${length / 1.6} ${to}`;

  } else if (from === 'km' && to === 'ft') {
    return `${length * 3281} ${to}`;
    
  } else if (from === 'miles' && to === 'km') {
    return `${length * 1.6} ${to}`;

  } else if (from === 'miles' && to === 'ft') {
    return `${length * 5280} ${to}`;

  } else if (from === 'ft' && to === 'km') {
    return `${length / 3281} ${to}`;

  } else if (from === 'ft' && to === 'miles') {
    return `${length / 5280} ${to}`;

  // You can also do if (from === 'km' && to === 'km) { ... }
  // if (from === to) is a trick you can use to save some code.
  } else if (from === to) {
    return `${length} ${to}`;
  }
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));

console.log(convertLength(5, 'lbs', 'lbs'));

// solving question from youtube to have and learn more about Javascript.
console.log('youtube practice question');


let  a = [1, 2, 3, 4];

a.forEach (function (val){
  console.log(val + 2);
});


a.forEach (function(val){
  console.log('Hello ' + val);
});


a.forEach( function (val) {
  if (val <= 2 ) {
    console.log(val);
  }
});


console.log('Gaaaap');

let sum = 0;
a.forEach(function (val) {
  sum = (sum + val);
})

console.log(sum);

console.log('gaaaaaaap');


a.forEach(function(val){
  if(typeof val === 'number') {
    sum = sum + val;
  }
})
console.log(sum);

console.log('....................................');
// array map method. 

let arr = [45, 23, 21]


let n = arr.map((value)=> {
  return value + 1;
})
 
console.log(n)

console.log('......................................');


// Array Filter method. 

let arr2 = [45, 23, 21, 0, 3, 5];

let p = arr2.filter((value) =>{
  
  return value < 10;

});

console.log(p);

console.log('........................');

// reduce in array 

 let arr3 = [1, 2, 3,  ];

 let h = arr3.reduce((h1, h2) => {
  return h1 * h2
 });

 console.log (h);


console.log ('......................................................');

console.log('solving some question : map, filter, and reduce question');

/* Exercises for map

Double the Numbers:

Given an array of numbers, return a new array where each number is doubled.*/

let numbers = [1, 2, 3, 4];
// Expected output: [2, 4, 6, 8]

let doubleTheNumber = numbers.map((value) => {
  return value * 2;
});

console.log(doubleTheNumber);

/*Convert to Uppercase:

Given an array of strings, return a new array where each string is in uppercase. */

let words = ["apple", "banana", "cherry"];
// Expected output: ["APPLE", "BANANA", "CHERRY"]

let convertToUppercase = words.map((value) => {
  return value.toUpperCase();
})

console.log(convertToUppercase);


/*Add 10 to Each Number:

Given an array of numbers, return a new array where each number has 10 added to it.*/

let number = [5, 10, 15];
// Expected output: [15, 20, 25]

let addTenToEachNumber = number.map((value) => {
  return value + 10;
});

console.log(addTenToEachNumber);
console.log('...............................')

/*Exercises for filter

Filter Out Odd Numbers:

Given an array of numbers, return a new array that only includes the even numbers.*/

let num = [1, 2, 3, 4, 5, 6];
// Expected output: [2, 4, 6]

let filterOutOddNumbers = num.filter((value) => {
  return value % 2 === 0;
});

console.log(filterOutOddNumbers);

/* Filter Short Words:

Given an array of strings, return a new 
array that only includes strings with 4 or more characters.
 */

let word = ["cat", "lion", "dog", "elephant"];
// Expected output: ["lion", "elephant"]

let filterShortWords = word.filter((value) => {
  return value.length >= 4;
});

console.log(filterShortWords);

/* Filter Numbers Greater Than 10:

Given an array of numbers, return a new array 
that only includes numbers greater than 10.*/

let numb = [5, 12, 8, 21, 14];
// Expected output: [12, 21, 14]

let filterNumberGreaterThanTen = numb.filter((value) => {
  return value > 10;
});

console.log(filterNumberGreaterThanTen);

console.log('...............................');

/*Exercises for reduce
Sum All Numbers:

Given an array of numbers, use reduce to return the sum of all the numbers. */ 

let numbe = [1, 2, 3, 4];
// Expected output: 10

let sumOfAllNumbers = numbe.reduce((index, value) => {

  return index + value;
}, 0);

console.log(sumOfAllNumbers);

/*Multiply All Numbers:

Given an array of numbers, use reduce to return the product of all the numbers.*/

let nu = [2, 3, 4];
// Expected output: 24

let multiplyAllNumbers = nu. reduce ((accumulator,value) => {
  return accumulator * value;
},1);

console.log(multiplyAllNumbers);

/*Concatenate All Strings:

Given an array of strings, use reduce to concatenate (join) them all into one single string.*/ 

let new_Words = ["Hello", "world", "!"];


let concatenateAllStrings = new_Words.reduce((accumulator, value) => {
  return accumulator + value;
}, ""); 

console.log(concatenateAllStrings); 

console.log ('..............................................................................')
console.log ('..............................................................................')
console.log ('..............................................................................')
console.log ('..............................................................................')
console.log ('..............................................................................')


/* Before just going to code in react I decide to go through simple concept of js which
gonna help me in React. 
The Topics are :-
1.Array :: (push(), pop(), length)
2.Object :: (Accessing Values, Adding/Updating Values)
3.Arrow functions :: (Basic syntax)
4.Map / filter / reduce
5.Mutability and immutability
6.Important :: Destructuring  */

// Now I will Do 2 -2 tasks for easch topic. 

/*1. Arrays

Task 1: Favorite Colors

Create an array called favoriteColors with at least 5 colors 
that you like. Then, use array indexing to log the first and last color to the console.*/

let favoriteColors = ['yellow', 'Green', 'Orange', 'white', 'black']; 

console.log(favoriteColors[0]);
console.log(favoriteColors[favoriteColors.length-1]);

/*
Task 2: Add a New Hobby

You have an array called hobbies with some of your hobbies in it. Add a new hobby to 
the end of the array using the push method and log the updated array.*/

let hobbies = ['Politics', 'history', 'geography', 'coding', 'Exploring India'];

hobbies.push('Meditating');

console.log(hobbies);

/*2. Objects
Task 1: Create Your Profile

Create an object called myProfile with properties like
 name, age, favoriteFood, and hobby. Then, log your name and favorite food to the console.*/

 let my_Profile = {
  name: 'Narendera Modi',
  age: 74,
  favoritefood: 'Indian',
  hobby: 'Desh Ki seva',
  role: 'Prime Minister Of India'
 };

 console.log(`${my_Profile.name} and favorite food ${my_Profile.favoritefood}`);


/*3. Arrow Functions

Task 1: Simple Addition

Write an arrow function called addNumbers that takes two 
numbers as parameters and returns their sum. Test it by adding 5 and 3 and log the result. */


const adding = (a, b) => a + b;

console.log(adding(5, 3))

/*Task 2: Greet a Friend

Write an arrow function called greetFriend that takes a friend’s name as a parameter 
and returns a greeting like "Hello, [name]!". Use it to greet a friend and log the greeting. */

const greetFriend = name => `Hello, ${name}!`;

console.log(greetFriend('Rahul Sharma'));

/* 4. Map and Filter

Task 1: Double the Numbers

Create an array of numbers from 1 to 5. Use the map function 
to create a new array where each number is doubled. Log the new array to the console.*/

let arrNumber = [1, 2, 3, 4, 5];

let doubleTheNumberInArray = arrNumber.map((value) => {
  return value * 2;
});

console.log(doubleTheNumberInArray);

/*Task 2: Filter Short Names

Create an array of names. Use the filter function to create a new 
array with only names that are longer than 4 characters. Log the new array to the console. */

let arrayName = ['Rahul', 'Taranjeet', 'Ram', 'Krishna', 'Tom'];

let filter = arrayName.filter((value) => {
    return value.length >= 4
});

console.log(filter);

/*  Mutability and Immutability

Task 1: Mutate an Array

Create an array of fruits. Use push to add a new fruit 
to the array. Then, log the original array to the console and see how it has changed. */

let newarray = ['orange', 'apple', 'Mango'];

newarray.push('apple2');

console.log(newarray);


/*Task 2: Create an Immutable Array

Create an array of numbers. Use the spread operator (...) to create a new array that 
adds one more number to the original array without changing the original array. 
Log both arrays to see the difference. */

console.log('Immutable');

let numm = [1, 2, 3, 4, 5];

let numm2= [...numm, 56, 46];

console.log(numm);
console.log(numm2);


/*6. Destructuring

Task 1: Destructure an Array

Create an array called fruitBasket with three fruits in it. 
Use array destructuring to assign each fruit to its own variable, and log each variable.*/

console.log('...........................');
console.log('destructuring');

let fruitBasket = ['apple', 'apple2', 'apple3'];

let [f1, f2, f3] = fruitBasket;

console.log(f1, f2, f3);

/*Task 2: Destructure an Object

Create an object called car with properties like make, model, and year. 
Use object destructuring to create variables for make and model, and log them.
 */

let carWithProperties = {
  model: 'xyz',
  year: 2005,
};

let {model, year} = carWithProperties;
console.log(model);
console.log(year);