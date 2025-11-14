class car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`The ${this.brand}, ${this.model} is starting 🚗🚘...`);
  }

  getCarInfo() {
    return `Brand: ${this.brand}, model: ${this.model}, year: ${this.year}`;
  }
}

const myCar = new car("Tesla", "Model S", 2023);
myCar.start();
console.log(myCar.getCarInfo());

/**************************************************************************** */

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`The ${this.name} is eating. 🍽️`);
  }
}

// We need to have the SubClass

class Dog extends Animal {
  constructor(name, age, bread) {
    super(name, age);
    this.bread = bread;
  }

  bark() {
    console.log(`the ${this.name} is barking 🐕🐶🅱️`);
  }
}

const myDog = new Dog("Tommy", 3, "pug");

myDog.eat();
myDog.bark();
console.log(`Breed: ${myDog.breed}, Name: ${myDog.name}, Age: ${myDog.age}`);

// /**************************************************************************** */
//  Create a bank system with the following classes:

// BankAccount (base class)

// Private property: #balance (use encapsulation)
// Properties: accountNumber, ownerName

// Methods:
// deposit(amount) → adds to balance
// withdraw(amount) → subtracts from balance if enough funds
// getBalance() → returns the balance

// *****
// SavingsAccount (subclass of BankAccount)
// Property: interestRate
// Method: addInterest() → adds interest to balance

// *****
// CurrentAccount (subclass of BankAccount)
// Property: overdraftLimit
// Override withdraw(amount) to allow overdraft

// Then, create objects of SavingsAccount and CurrentAccount and perform some transactions.

class BankAccount {
  #balance; // private properties

  constructor(accountNumber, ownerName, balance = 0) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`${amount} Deposited. New Balance ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Insufficient Balance ~_~`);
    } else {
      this.#balance -= amount;
      console.log(`${amount} Withdraw. New Balance${this.#balance}`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

class SavingsAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, interestRate) {
    super(accountNumber, ownerName, balance);
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = this.getBalance() * (this.interestRate / 100);
    console.log(`Interest Added : ${interest}`);
  }
}

class CurrentAccount extends BankAccount {
  constructor(accountNumber, ownerName, balance, overdraftLimit) {
    super(accountNumber, ownerName, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount) {
    if (amount > this.getBalance() + this.overdraftLimit) {
      console.log(`Overdraft limit exceeded 🤯`);
    } else {
      const newBalance = this.getBalance() - amount;
      super.deposit(-amount);
      console.log(`${amount} Withdraw. New balance: ${this.getBalance()}`);
    }
  }
}

// testing

const mySaving = new SavingsAccount("S1008", "JOE", 5000, 10);
mySaving.deposit(1000);
mySaving.withdraw(500);
mySaving.withdraw(500);

const myCurrent = new CurrentAccount("JJ18", "Micheal", 500, 200);
myCurrent.withdraw(600);
myCurrent.withdraw(200);

/**************************************************************************** */

// Question:

// Create an abstract class Shape with:
// A method calculateArea() (but do NOT implement it in the parent class)
// A method describe() → logs "This is a shape."

// Then create two subclasses:
// 1️⃣ Circle
// Property: radius
// Implement calculateArea() for a circle
// Formula: π * radius * radius

// 2️⃣ Rectangle
// Properties: width, height
// Implement calculateArea() for a rectangle
// Formula: width * height

// Finally:
// Create one Circle and one Rectangle.
// Call describe() and calculateArea() for each.

class Shape {
  constructor() {
    if (new.target === Shape) {
      throw new Error(`Cannot instantiate abstract class Shape directly`);
    }
  }
  calculateArea() {
    throw new Error(`CalculateArea() must be implemented in subclass`);
  }

  describe() {
    console.log(`This is a Shape`);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}