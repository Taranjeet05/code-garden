class BankAccount {
  constructor(ownerName, accountNumber) {
    this.ownerName = ownerName;
    this.accountNumber = accountNumber;
    this.balance = 0;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`💰 ${this.ownerName} deposited €${amount}.`);
    } else {
      console.log("❌ Deposit amount must be greater than 0.");
    }
  }

  withdraw(amount) {
    if (amount <= this.balance && amount > 0) {
      this.balance -= amount;
      console.log(`💸 ${this.ownerName} withdrew €${amount}.`);
    } else {
      console.log("⚠️ Insufficient balance or invalid amount.");
    }
  }

  checkBalance() {
    console.log(`🏦 ${this.ownerName}'s balance: €${this.balance}`);
  }
}

class Bank {
  constructor() {
    this.accounts = [];
  }

  createAccount(ownerName, accountNumber) {
    const newAccount = new BankAccount(ownerName, accountNumber);
    this.accounts.push(newAccount);
    console.log(`✅ Account created for ${ownerName} (A/C No: ${accountNumber}).`);
    return newAccount;
  }

  findAccount(accountNumber) {
    const account = this.accounts.find(
      (acc) => acc.accountNumber === accountNumber
    );
    if (account) {
      console.log(`🔍 Found account: ${account.ownerName}`);
      return account;
    } else {
      console.log("❌ Account not found!");
      return null;
    }
  }
}

// Example usage
const myBank = new Bank();
const acc1 = myBank.createAccount("Tara Singh", "1001");
const acc2 = myBank.createAccount("Julia", "1002");

acc1.deposit(500);
acc1.withdraw(200);
acc1.checkBalance();

acc2.deposit(1000);
acc2.withdraw(1200);
acc2.checkBalance();

const searchAcc = myBank.findAccount("1001");
if (searchAcc) searchAcc.checkBalance();

// *****************************************************************************************

// Parent Class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`🐾 ${this.name} makes a sound: ${this.sound}`);
  }
}

// Child Class 1
class Dog extends Animal {
  makeSound() {
    console.log(`🐶 ${this.name} barks: ${this.sound}`);
  }

  fetch() {
    console.log(`🎾 ${this.name} runs to fetch the ball!`);
  }
}

// Child Class 2
class Cat extends Animal {
  makeSound() {
    console.log(`🐱 ${this.name} meows: ${this.sound}`);
  }

  scratch() {
    console.log(`😾 ${this.name} is scratching the sofa!`);
  }
}

// Create Objects
const dog1 = new Dog("Buddy", "Woof Woof");
const cat1 = new Cat("Misty", "Meow Meow");

// Call Methods
dog1.makeSound();
dog1.fetch();

cat1.makeSound();
cat1.scratch();

// *****************************************************************************************

// Base Class
class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`🚗 Vehicle Info: ${this.brand} ${this.model}`);
  }
}

// Subclass 1
class Car extends Vehicle {
  constructor(brand, model, doors) {
    super(brand, model); // calls parent constructor
    this.doors = doors;
  }

  displayInfo() {
    console.log(
      `🚘 Car Info: ${this.brand} ${this.model} with ${this.doors} doors.`
    );
  }
}

// Subclass 2
class Bike extends Vehicle {
  constructor(brand, model, hasCarrier) {
    super(brand, model);
    this.hasCarrier = hasCarrier;
  }

  displayInfo() {
    const carrierStatus = this.hasCarrier ? "has a carrier" : "no carrier";
    console.log(
      `🏍️ Bike Info: ${this.brand} ${this.model} and it ${carrierStatus}.`
    );
  }
}

// Example Usage
const car1 = new Car("BMW", "X5", 4);
const bike1 = new Bike("Yamaha", "R15", false);

car1.displayInfo(); // 🚘 Car Info: BMW X5 with 4 doors.
bike1.displayInfo(); // 🏍️ Bike Info: Yamaha R15 and it no carrier.
