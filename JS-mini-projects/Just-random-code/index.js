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


// *****************************************************************************************

// Base Class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    console.log(`👤 Name: ${this.name}, Age: ${this.age}`);
  }
}

// Subclass: Student
class Student extends Person {
  #grades = []; // private property (encapsulation)

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  addGrade(grade) {
    if (grade < 0 || grade > 100) {
      console.log("❌ Invalid grade. Please enter between 0 and 100.");
      return;
    }
    this.#grades.push(grade);
  }

  calculateAverage() {
    if (this.#grades.length === 0) {
      console.log(`${this.name} has no grades yet.`);
      return 0;
    }
    const avg =
      this.#grades.reduce((sum, grade) => sum + grade, 0) / this.#grades.length;
    console.log(`📊 ${this.name}'s Average Grade: ${avg.toFixed(2)}%`);
    return avg;
  }

  getDetails() {
    console.log(`🎓 Student: ${this.name}, Age: ${this.age}, ID: ${this.studentId}`);
  }
}

// Subclass: Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    console.log(`👩‍🏫 Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`);
  }
}

// Example Usage
const student1 = new Student("Taranjeet Singh", 19, "STU101");
student1.addGrade(90);
student1.addGrade(85);
student1.addGrade(95);
student1.getDetails();
student1.calculateAverage();

const teacher1 = new Teacher("Julia Meyer", 30, "Mathematics");
teacher1.getDetails();

// *****************************************************************************************

// 🎬 Movie Class
class Movie {
  constructor(title, duration, totalSeats) {
    this.title = title;
    this.duration = duration; // in minutes
    this.availableSeats = totalSeats;
  }

  bookSeat() {
    if (this.availableSeats > 0) {
      this.availableSeats--;
      console.log(
        `🎟️ Ticket booked for "${this.title}". Seats left: ${this.availableSeats}`
      );
    } else {
      console.log(`❌ "${this.title}" is sold out!`);
    }
  }

  getInfo() {
    console.log(
      `🎥 Movie: ${this.title}, Duration: ${this.duration} mins, Seats Left: ${this.availableSeats}`
    );
  }
}

// 🏢 Theater Class (Composition: Theater has many Movies)
class Theater {
  constructor(name) {
    this.name = name;
    this.movies = []; // list of Movie objects
  }

  addMovie(movie) {
    this.movies.push(movie);
    console.log(`🍿 "${movie.title}" added to ${this.name} theater.`);
  }

  listMovies() {
    console.log(`🎞️ Movies currently showing in ${this.name}:`);
    this.movies.forEach((movie) => movie.getInfo());
  }

  bookTicket(title) {
    const found = this.movies.find(
      (movie) => movie.title.toLowerCase() === title.toLowerCase()
    );
    if (found) {
      found.bookSeat();
    } else {
      console.log(`❌ No movie found with title "${title}".`);
    }
  }
}

// Example Usage
const theater = new Theater("Cineplex Frankfurt");

const movie1 = new Movie("Avengers: Endgame", 180, 3);
const movie2 = new Movie("Interstellar", 160, 2);

theater.addMovie(movie1);
theater.addMovie(movie2);

theater.listMovies();

theater.bookTicket("Avengers: Endgame");
theater.bookTicket("Avengers: Endgame");
theater.bookTicket("Avengers: Endgame");
theater.bookTicket("Avengers: Endgame"); // Sold out ❌

theater.bookTicket("Interstellar");
theater.listMovies();
