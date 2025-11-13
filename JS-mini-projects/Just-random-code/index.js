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
    console.log(`${amount} Deposited. New Balance${this.#balance}`);
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
