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
    this.paymentGateway = paymentGateway;
  }

  setPaymentGateway(gateway) {
    this.paymentGateway = gateway;
  }

  processPayment() {
    console.log(`Order total: $${this.amount}`);
    this.paymentGateway.pay(this.amount);
  }
}

// Testing
const order = new Order(150, new CreditCardPayment());
order.processPayment();

order.setPaymentGateway(new PayPalPayment());
order.processPayment();

order.setPaymentGateway(new CryptoPayment());
order.processPayment();

//***************************************************************************** */

// OOP Challenge: "Online Course Platform (Polymorphism + Inheritance + Encapsulation)"
// You are building a small online-course system.

// Requirements
// You must create 3 classes:

// 1. Base Class: Course
// Properties:
// title (string)
// duration (number, hours)
// Methods:
// getInfo() → returns "Course: <title>, Duration: <duration> hours"

// 2. Subclass: VideoCourse
// Additional property:
// videoCount
// Overrides:
// getInfo()
// → return "Video Course: <title>, <videoCount> videos, <duration> hours"

// 3. Subclass: TextCourse
// Additional property:
// pageCount
// Overrides:
// getInfo()
// → return "Text Course: <title>, <pageCount> pages, <duration> hours"

// 4. Write a function printCourseDetails(course)
// This function must:
// Accept any course type
// Print the correct info (polymorphism)

// ⭐ BONUS
// Create an array of mixed courses and loop through it using the polymorphic function.

// Base Class
class Course {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
  }

  getInfo() {
    return `Course: ${this.title}, Duration: ${this.duration} hours`;
  }
}

// subClass :: VideoCourse

class VideoCourse extends Course {
  constructor(title, duration, videoCount) {
    super(title, duration);
    this.videoCount = videoCount;
  }

  getInfo() {
    return `Video Course: ${this.title}, ${this.videoCount} videos, ${this.duration} hours`;
  }
}

// subClass :: TextCourse

class TextCourse extends Course {
  constructor(title, duration, pageCount) {
    super(title, duration);
    this.pageCount = pageCount;
  }

  getInfo() {
    return `Text Course: ${this.title}, ${this.pageCount} pages, ${this.duration} hours`;
  }
}

// Polymorphism :: function
function printCourseDetails(course) {
  console.log(course.getInfo());
}

// test
const Video = new VideoCourse("JavaScript Mastery", 10, 15);
const text = new TextCourse("SCSS Deep Dive", 15, 400);

printCourseDetails(Video);
printCourseDetails(text);

// Mixed Array for Testing

const Courses = [
  new VideoCourse("React Basics", 8, 32),
  new TextCourse("CSS Handbook", 4, 90),
  new Course("AI Concepts", 3),
];

Courses.map((course) => printCourseDetails(course));

/******************************************************************* */

// OOP Challenge: “Employee Payment System”
// Requirements

// Your task: create a system that calculates salary for different kinds of employees.

// 1. Abstract Class: Employee
// Properties:
// name
// baseSalary
// Methods:
// calculatePay() → must be overridden (throw error if called directly)
// getInfo() → returns "Employee: <name>, Base Salary: <baseSalary>"

// Since JS doesn’t have real abstract classes, simulate it manually.

// 2. Subclass: FullTimeEmployee
// Additional:
// bonus
// calculatePay() → return baseSalary + bonus

// 3. Subclass: PartTimeEmployee
// Additional:
// hourlyRate
// hoursWorked
// calculatePay() → return hourlyRate * hoursWorked

// 4. Subclass: Intern
// Interns get a fixed stipend, not salary.
// Additional:
// stipend
// calculatePay() → return stipend

// 5. Write a function printPaySlip(employee)
// Should print:
// <name> earns <calculatedPay> this month.

// Use polymorphism.

// ⭐ BONUS
// Create an employee list containing full-time, part-time, and interns → loop + print payslip.

// Abstract Base Class
// Abstract Base Class
class Employee {
  constructor(name, baseSalary) {
    if (new.target === Employee) {
      throw new Error("Cannot instantiate abstract class Employee");
    }

    this.name = name;
    this.baseSalary = baseSalary;
  }

  calculatePay() {
    throw new Error("calculatePay() must be implemented by subclass");
  }

  getInfo() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

// Full-time employee
class FullTimeEmployee extends Employee {
  constructor(name, baseSalary, bonus) {
    super(name, baseSalary);
    this.bonus = bonus;
  }

  calculatePay() {
    return this.baseSalary + this.bonus;
  }
}

// Part-time employee
class PartTimeEmployee extends Employee {
  constructor(name, hourlyRate, hoursWorked) {
    super(name, 0); // base not used
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculatePay() {
    return this.hourlyRate * this.hoursWorked;
  }
}

// Intern
class Intern extends Employee {
  constructor(name, stipend) {
    super(name, 0); // base not used
    this.stipend = stipend;
  }

  calculatePay() {
    return this.stipend;
  }
}

// Polymorphic Function
function printPaySlip(employee) {
  console.log(`${employee.name} earns ${employee.calculatePay()} this month.`);
}

// Test data
const employees = [
  new FullTimeEmployee("Alice", 3000, 500),
  new PartTimeEmployee("Bob", 20, 80),
  new Intern("Charlie", 600),
];

employees.forEach((e) => printPaySlip(e));

/******************************************************************* */

// OOP Challenge: “Library Management System”
// Requirements:

// You need to create a library system with different types of items.

// 1. Base Class: LibraryItem
// Properties:
// title
// author
// year

// Methods:
// getInfo() → returns "Title: <title>, Author: <author>, Year: <year>"
// checkout() → abstract method (throw error if called directly)

// 2. Subclass: Book
// Additional property: pages
// Implement checkout() → logs "Book '<title>' has been checked out 📖"

// 3. Subclass: Magazine
// Additional property: issueNumber
// Implement checkout() → logs "Magazine '<title>' Issue #<issueNumber> has been checked out 📰"

// 4. Subclass: DVD
// Additional property: duration (in minutes)
// Implement checkout() → logs "DVD '<title>' of duration <duration> minutes has been checked out 🎬"

// 5. Polymorphic function borrowItem(item)
// Accepts any library item
// Calls checkout() method

// 6. BONUS
// Create an array of mixed items (Book, Magazine, DVD)
// Loop through array and call borrowItem() on each

// Base Class
class LibraryItem {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getInfo() {
    return `Title: ${title}, Author: ${this.author}, Year: ${this.year}`;
  }

  // Abstract method
  checkout() {
    throw new Error("Checkout must be implement in subclass");
  }
}

// SubClass :: Book

class Book extends LibraryItem {
  constructor(title, author, year, pages) {
    super(title, author, year);
    this.pages = pages;
  }

  checkout() {
    console.log(`Book '${this.title}' has been checked out 📖`);
  }
}

// SubClass :: Magazine

class Magazine extends LibraryItem {
  constructor(title, author, year, issueNumber) {
    super(title, author, year);
    this.issueNumber = issueNumber;
  }

  checkout() {
    console.log(
      `Magazine '${this.title}' Issue #<issueNumber> has been checked out 📰`
    );
  }
}

// SubClass :: DVD

class DVD extends LibraryItem {
  constructor(title, author, year, duration) {
    super(title, author, year);
    this.duration = duration; // in min
  }

  checkout() {
    console.log(
      `DVD '${this.title}' of duration <duration> minutes has been checked out 🎬`
    );
  }
}

// polymorphic function

function borrowItem(item) {
  item.checkout();
}

// test
const items = [
  new Book("JS Basics", "Alice", 2022, 300), // title, author, year, pages
  new Magazine("Tech Today", "Bob", 2023, 12), // title, author, year, issueNumber
  new DVD("Inception", "Christopher Nolan", 2010, 148), // title, author, year, duration
];

items.forEach(borrowItem);

/****************************************************************************************************************** */

// 🧩 OOP Challenge: “Shopping Cart System”
// Problem Statement

// You are building a shopping cart for an e-commerce app.

// 1️⃣ Class: Product
// Properties:
// id
// name
// price

// Method:
// getInfo() → returns "Product: <name>, Price: <price>"

// 2️⃣ Class: CartItem
// Properties:
// product (instance of Product)
// quantity

// Method:
// getTotalPrice() → product.price * quantity

// 3️⃣ Class: ShoppingCart
// Private property:
// #items (array of CartItem)

// Methods:
// addProduct(product, quantity)
// removeProduct(productId)
// getTotalAmount() → sum of all cart items
// printCart() → logs all items and total price

// 4️⃣ Test the Flow
// Create products
// Add products to cart
// Remove one product
// Print cart and total

class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Product: ${this.name}, Price: ${this.price}`;
  }
}

// SubClass CartItem

class CartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product * this.quantity;
  }
}

// SubClass :: ShoppingCart

class ShoppingCart {
  #items = [];

  addProduct(product, quantity) {
    const existingItem = this.#items.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.#items.push(new CartItem(product, quantity));
    }
  }

  removeProduct(productId) {
    this.#items = this.#items.filter((item) => item.product.id !== productId);
  }

  getTotalAmount() {
    return this.#items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  printCart() {
    console.log("🛒 Shopping Cart:");
    this.#items.forEach((item) => {
      console.log(
        `${item.product.name} x ${item.quantity} = ${item.getTotalPrice()}`
      );
    });
    console.log("Total:", this.getTotalAmount());
  }
}

// test

const p1 = new Product(1, "Laptop", 1000); // id, name, price
const p2 = new Product(2, "Mouse", 50); // id, name, price

const cart = new ShoppingCart();

cart.addProduct(p1, 1); // product, quantity
cart.addProduct(p2, 3); // product, quantity
cart.addProduct(p1, 1); // product, quantity

console.log(cart)

/************************************************************************************************************************ */

// 🧩 MEGA OOP CHALLENGE: “Food Delivery System”
// 🚀 OOP Concepts Covered

// ✔ Encapsulation
// ✔ Abstraction
// ✔ Inheritance
// ✔ Polymorphism
// ✔ Composition
// ✔ Strategy Pattern
// ✔ Factory Pattern
// ✔ Static Methods
// ✔ Method Overriding
// ✔ Dependency Injection

// 🧠 Problem Statement

// You are building a Food Delivery App.

// 1️⃣ Abstract Class: PaymentMethod
// Method: pay(amount) → abstract
// Cannot be instantiated directly

// 2️⃣ Payment Strategies
// CardPayment
// UPIPayment
// CashPayment

// Each must implement pay(amount).

// 3️⃣ Class: Restaurant
// Properties:
// name
// menu (array of items { id, name, price })

// Method:
// getItemById(id)

// 4️⃣ Class: OrderItem
// Properties:
// item
// quantity

// Method:
// getPrice()

// 5️⃣ Class: Order
// Private:
// #items
// Properties:
// restaurant
// paymentMethod

// Methods:
// addItem(item, quantity)
// setPaymentMethod(method)
// getTotal()
// checkout()

// 6️⃣ Factory Class: PaymentFactory
// Static Method:
// createPayment(type)

// 7️⃣ Polymorphic Function
// processOrder(order) → works with any payment method