// MAP

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);

const users = [
  { name: "joe", age: 20 },
  { name: "jane", age: 25 },
  { name: "jack", age: 30 },
  { name: "jill", age: 35 },
];

const userNames = users.map((user) => user.name);

console.log(userNames);

// opp in js

class car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
  hook() {
    console.log(`This is a ${this.brand} car from ${this.year}.`);
  }
}

const myCar = new car("BMW", 2020);
myCar.hook();

console.log(myCar instanceof car); // true
console.log(myCar instanceof Object); // true
console.log(myCar instanceof Array); // false
console.log(myCar instanceof Function); // false
console.log(myCar instanceof String); // false
console.log(myCar instanceof Number); // false
console.log(myCar instanceof Boolean); // false

console.log(myCar);

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks 🐶`);
  }
}

const dog = new Dog("Buddy");
dog.speak(); // Buddy barks 🐶

console.log(dog);
console.log(dog.speak());

// Filter in js

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const events = numberArray.filter((number) => number % 2 === 0);

console.log(events);
