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

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// testing
const circle = new Circle(5);
circle.describe();
console.log("circle Area:", circle.calculateArea());

const rectangle = new Rectangle(4, 8);
rectangle.describe();
console.log("Rectangle Area:", rectangle.calculateArea());

/******************************************************************* */

// 🧩 OOP Question (Advanced: Composition + Strategy Pattern + Polymorphism)
// Question:

// You are building a notification system.
// Create the following:

// 1️⃣ Create an abstract class Notification
// send(message) → abstract method
// Throws error if someone tries to instantiate Notification directly.

// 2️⃣ Create three notification strategy classes:
// EmailNotification
// Implements send(message)
// Logs: "Sending EMAIL: [message]"
// SMSNotification
// Implements send(message)
// Logs: "Sending SMS: [message]"
// PushNotification
// Implements send(message)
// Logs: "Sending PUSH: [message]"

// 3️⃣ Create a class NotificationManager
// Property: strategy (the notification method to use)
// Method: setStrategy(strategy)
// Method: notify(message) → uses the selected strategy to send message.

// 4️⃣ Test the flow
// Create a NotificationManager
// Change strategies (email → sms → push)
// Send messages each time

// Abstract class
class Notification {
  constructor() {
    if (new.target === Notification) {
      throw new Error("Cannot instantiate abstract class Notification.");
    }
  }

  send(message) {
    throw new Error("send() must be implemented in subclass.");
  }
}

// Strategy 1: Email
class EmailNotification extends Notification {
  send(message) {
    console.log(`Sending EMAIL: ${message}`);
  }
}

// Strategy 2: SMS
class SMSNotification extends Notification {
  send(message) {
    console.log(`Sending SMS: ${message}`);
  }
}

// Strategy 3: Push
class PushNotification extends Notification {
  send(message) {
    console.log(`Sending PUSH: ${message}`);
  }
}

// Context (Manager)
class NotificationManager {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  notify(message) {
    if (!this.strategy) {
      console.log("No notification strategy selected ❌");
      return;
    }
    this.strategy.send(message);
  }
}

// Testing
const manager = new NotificationManager(new EmailNotification());
manager.notify("Welcome to our platform!");

manager.setStrategy(new SMSNotification());
manager.notify("Your OTP is 12345");

manager.setStrategy(new PushNotification());
manager.notify("You have a new message!");

/****************************************************************************** */

// 🧩 OOP Question (Advanced: Factory Pattern + Static Methods + Polymorphism + Encapsulation)
// Question:
// You are building a User Management System.
// Create the following:

// 1️⃣ Base class: User
// Private property: #role
// Properties: name, email
// Constructor takes name, email, role
// Method: getRole() → returns #role
// Method: describe() → logs:
// "Name: [name], Email: [email], Role: [role]"

// 2️⃣ Subclasses:
// Admin
// Extra method: accessAdminPanel() → logs "Admin panel accessed ✔️"
// Customer
// Extra method: purchase(item) → logs "Customer purchased: [item]"

// Guest
// Extra method: viewContent() → logs "Guest is viewing content"

// 3️⃣ Create a UserFactory class with a static method:
// createUser(type, name, email)

// Returns:
// new Admin(name, email)
// new Customer(name, email)
// new Guest(name, email)
// Throws error if type is unknown.

// 4️⃣ Test the flow:

// Create 3 users using the factory:
// An admin
// A customer
// A guest

// Call their role-specific methods

// Base User Class
class User {
  #role; //private
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.#role = role;
  }

  getRole() {
    return this.#role;
  }

  describe() {
    console.log(
      `Name:${this.name}, Email:${this.email} and Role:${this.getRole()}`
    );
  }
}

// SubClass Admin
class Admin extends User {
  constructor(name, email) {
    super(name, email, "Admin");
  }

  accessAdminPanel() {
    console.log(`Admin panel accessed ✨✨✅`);
  }
}

// subClass Customer

class Customer extends User {
  constructor(name, email) {
    super(name, email, "Customer");
  }

  purchase(item) {
    console.log(`Customer purchased: ${item}`);
  }
}

// subClass Guest

class Guest extends User {
  constructor(name, email) {
    super(name, email, "Guest");
  }

  viewContent() {
    console.log(`Guest is viewing the content 🎑`);
  }
}

class UserFactory {
  constructor(type, name, email) {
    this.type = type;
    this.name = name;
    this.email = email;
  }

  static createUser(type, name, email) {
    switch (type.toLowerCase()) {
      case "admin":
        return new Admin(name, email);
      case "customer":
        return new Customer(name, email);
      case "guest":
        return new Guest(name, email);
      default:
        throw new Error(`Invalid user type`);
    }
  }
}

// testing
const admin = UserFactory.createUser("admin", "Bob", "bob@test.com");
admin.describe();
admin.accessAdminPanel();

const customer = UserFactory.createUser("customer", "Singh", "singh@test.com");
customer.describe();
customer.purchase("Rog Laptop");

const guest = UserFactory.createUser("guest", "leo", "leo@test.com");
guest.describe();
guest.viewContent();

//************************************************************************************** */

// OOP Question (Advanced: Payment Processing System)
// Problem:

// You are building a Payment Processing System.

// Create the following:

// 1️⃣ Abstract class PaymentGateway
// Method: pay(amount) → abstract (must be overridden)
// Constructor throws an error if someone tries to instantiate directly.

// 2️⃣ Create three payment gateway strategies:
// CreditCardPayment
// Implements pay(amount)
// Logs:
// "Processing CREDIT CARD payment of $[amount]"
// PayPalPayment
// Implements pay(amount)
// Logs:
// "Processing PAYPAL payment of $[amount]"
// CryptoPayment
// Implements pay(amount)
// Logs:
// "Processing CRYPTO payment of $[amount]"

// 3️⃣ Create a class Order
// Properties: amount, paymentGateway
// Method: setPaymentGateway(gateway) → switch payment method dynamically
// Method: processPayment()
// Logs: "Order total: $[amount]"
// Calls this.paymentGateway.pay(amount)

// Abstract class PaymentGateway
class PaymentGateway {
  constructor() {
    if (new.target === PaymentGateway) {
      throw new Error("Cannot instantiate abstract Class PaymentGateway");
    }
  }

  pay(amount) {
    throw new Error("Pay () must be implemented by Subclass");
  }
}

// strategy 1 CreditCardPayment ::

class CreditCardPayment extends PaymentGateway {
  pay(amount) {
    console.log(`Processing CREDIT CARD Payment of ${amount}`);
  }
}

// strategy 2 Paypal ::
class PayPalPayment extends PaymentGateway {
  pay(amount) {
    console.log(`Processing PAYPAL Payment of ${amount}`);
  }
}

class CryptoPayment extends PaymentGateway {
  pay(amount) {
    console.log(`Processing CRYPTO Payment of ${amount}`);
  }
}

// context : Order ::

class Order {
  constructor(amount, paymentGateway) {
    this.amount = amount;
    this.PaymentGateway = paymentGateway;
  }

  setPaymentGateway(gateway) {
    this.paymentGateway = gateway;
  }

  processPayment() {
    console.log(`Order Total :: ${this.amount}`);
    this.paymentGateway.pay(this.amount);
  }
}
