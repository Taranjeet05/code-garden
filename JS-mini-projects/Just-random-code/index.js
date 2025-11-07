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
    console.log(
      `✅ Account created for ${ownerName} (A/C No: ${accountNumber}).`
    );
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
    console.log(
      `🎓 Student: ${this.name}, Age: ${this.age}, ID: ${this.studentId}`
    );
  }
}

// Subclass: Teacher
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getDetails() {
    console.log(
      `👩‍🏫 Teacher: ${this.name}, Age: ${this.age}, Subject: ${this.subject}`
    );
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

// *****************************************************************************************

// 🌐 Base Device Class
class Device {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.isOn = false;
  }

  turnOn() {
    this.isOn = true;
    console.log(`🔌 ${this.name} in ${this.location} is now ON`);
  }

  turnOff() {
    this.isOn = false;
    console.log(`⚡ ${this.name} in ${this.location} is now OFF`);
  }
}

// 💡 Light Class (inherits Device)
class Light extends Device {
  constructor(name, location, brightness = 50) {
    super(name, location);
    this.brightness = brightness;
  }

  turnOn() {
    super.turnOn();
    console.log(`💡 The light is glowing at ${this.brightness}% brightness.`);
  }
}

// 🌬️ Fan Class (inherits Device)
class Fan extends Device {
  constructor(name, location, speed = 1) {
    super(name, location);
    this.speed = speed;
  }

  turnOn() {
    super.turnOn();
    console.log(`🌪️ The fan is spinning at speed level ${this.speed}.`);
  }
}

// 🌡️ Thermostat Class (inherits Device)
class Thermostat extends Device {
  constructor(name, location, temperature = 22) {
    super(name, location);
    this.temperature = temperature;
  }

  turnOn() {
    super.turnOn();
    console.log(`🌡️ Thermostat set to ${this.temperature}°C.`);
  }
}

// 🏠 SmartHome Class (Composition)
class SmartHome {
  constructor(owner) {
    this.owner = owner;
    this.devices = [];
  }

  addDevice(device) {
    this.devices.push(device);
    console.log(`✅ Added ${device.name} to ${this.owner}'s Smart Home.`);
  }

  turnOnAllDevices() {
    console.log(`🔈 Turning on all devices for ${this.owner}...`);
    this.devices.forEach((device) => device.turnOn());
  }

  turnOffAllDevices() {
    console.log(`🔇 Turning off all devices for ${this.owner}...`);
    this.devices.forEach((device) => device.turnOff());
  }
}

// Example Usage
const myHome = new SmartHome("Taranjeet Singh");

const livingRoomLight = new Light("Ceiling Light", "Living Room", 70);
const bedroomFan = new Fan("Ceiling Fan", "Bedroom", 3);
const hallThermostat = new Thermostat("Thermostat", "Hall", 24);

myHome.addDevice(livingRoomLight);
myHome.addDevice(bedroomFan);
myHome.addDevice(hallThermostat);

myHome.turnOnAllDevices(); // All devices ON (Polymorphism)
myHome.turnOffAllDevices(); // All devices OFF

// *****************************************************************************************

// 🎶 Song Class
class Song {
  constructor(title, artist, duration) {
    this.title = title;
    this.artist = artist;
    this.duration = duration; // in seconds
  }

  getDetails() {
    return `${this.title} by ${this.artist} (${this.duration}s)`;
  }
}

// 🎧 Playlist Class (Composition: Playlist contains many songs)
class Playlist {
  constructor(name) {
    this.name = name;
    this.songs = [];
  }

  addSong(song) {
    this.songs.push(song);
    console.log(`🎵 Added "${song.title}" to playlist "${this.name}".`);
  }

  removeSong(title) {
    const index = this.songs.findIndex(
      (song) => song.title.toLowerCase() === title.toLowerCase()
    );
    if (index !== -1) {
      const removed = this.songs.splice(index, 1);
      console.log(
        `❌ Removed "${removed[0].title}" from playlist "${this.name}".`
      );
    } else {
      console.log(`⚠️ Song "${title}" not found in playlist "${this.name}".`);
    }
  }

  listSongs() {
    if (this.songs.length === 0) {
      console.log(`📂 Playlist "${this.name}" is empty.`);
      return;
    }
    console.log(`🎼 Songs in "${this.name}":`);
    this.songs.forEach((song, i) =>
      console.log(`${i + 1}. ${song.getDetails()}`)
    );
  }
}

// ▶️ MusicPlayer Class
class MusicPlayer {
  constructor() {
    this.currentSongIndex = 0;
    this.isPlaying = false;
    this.currentPlaylist = null;
  }

  loadPlaylist(playlist) {
    this.currentPlaylist = playlist;
    this.currentSongIndex = 0;
    console.log(`📀 Loaded playlist "${playlist.name}".`);
  }

  play() {
    if (!this.currentPlaylist || this.currentPlaylist.songs.length === 0) {
      console.log("❌ No playlist loaded or empty playlist!");
      return;
    }
    this.isPlaying = true;
    const currentSong = this.currentPlaylist.songs[this.currentSongIndex];
    console.log(`▶️ Now playing: ${currentSong.getDetails()}`);
  }

  pause() {
    if (this.isPlaying) {
      this.isPlaying = false;
      console.log("⏸️ Music paused.");
    } else {
      console.log("⚠️ No song is currently playing.");
    }
  }

  skip() {
    if (!this.currentPlaylist) {
      console.log("❌ No playlist loaded!");
      return;
    }
    this.currentSongIndex++;
    if (this.currentSongIndex >= this.currentPlaylist.songs.length) {
      console.log("🏁 End of playlist reached.");
      this.isPlaying = false;
      this.currentSongIndex = 0;
    } else {
      this.play();
    }
  }

  showCurrentSong() {
    if (!this.currentPlaylist) {
      console.log("⚠️ No playlist loaded.");
      return;
    }
    const currentSong = this.currentPlaylist.songs[this.currentSongIndex];
    console.log(`🎶 Currently selected: ${currentSong.getDetails()}`);
  }
}

// Example Usage
const song1 = new Song("Perfect", "Ed Sheeran", 240);
const song2 = new Song("Shape of You", "Ed Sheeran", 233);
const song3 = new Song("Senorita", "Shawn Mendes", 207);

const playlist = new Playlist("Taranjeet's Favorites");
playlist.addSong(song1);
playlist.addSong(song2);
playlist.addSong(song3);
playlist.listSongs();

const player = new MusicPlayer();
player.loadPlaylist(playlist);
player.play();
player.skip();
player.pause();
player.showCurrentSong();

// *****************************************************************************************

// 🧍 Base Character Class
class Character {
  constructor(name, health = 100, level = 1) {
    this.name = name;
    this.health = health;
    this.level = level;
  }

  takeDamage(amount) {
    this.health -= amount;
    if (this.health <= 0) {
      this.health = 0;
      console.log(`💀 ${this.name} has been defeated!`);
    } else {
      console.log(
        `⚔️ ${this.name} took ${amount} damage. Remaining health: ${this.health}`
      );
    }
  }

  showStatus() {
    console.log(
      `👤 ${this.name} - Health: ${this.health}, Level: ${this.level}`
    );
  }
}

// 🗡️ Warrior Subclass
class Warrior extends Character {
  attack() {
    console.log(`🗡️ ${this.name} swings a sword!`);
  }

  showStatus() {
    console.log(
      `🛡️ Warrior: ${this.name}, Health: ${this.health}, Level: ${this.level}`
    );
  }
}

// 🔮 Mage Subclass
class Mage extends Character {
  castSpell() {
    console.log(`✨ ${this.name} casts a powerful spell!`);
  }

  showStatus() {
    console.log(
      `🔮 Mage: ${this.name}, Health: ${this.health}, Level: ${this.level}`
    );
  }
}

// Example Usage
const hero = new Warrior("Arjun", 120, 5);
const wizard = new Mage("Merlin", 80, 7);

hero.showStatus();
wizard.showStatus();

hero.attack();
wizard.castSpell();

wizard.takeDamage(30);
hero.takeDamage(50);

hero.showStatus();
wizard.showStatus();

/************************************ */

// 🎬 Base Class
class User {
  #watchedMovies = [];

  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  watchMovie(movieTitle) {
    this.#watchedMovies.push(movieTitle);
    console.log(`🍿 ${this.name} is watching "${movieTitle}"`);
  }

  showProfile() {
    console.log(`👤 User: ${this.name} | 📧 Email: ${this.email}`);
  }

  getWatchedMovies() {
    return [...this.#watchedMovies];
  }
}

// 💡 Free User Class
class FreeUser extends User {
  constructor(name, email) {
    super(name, email);
    this.limit = 2;
  }

  watchMovie(movieTitle) {
    const watched = this.getWatchedMovies();
    if (watched.length < this.limit) {
      super.watchMovie(movieTitle);
    } else {
      console.log(`⚠️ Movie limit reached! Upgrade to Premium to watch more.`);
    }
  }
}

// 💎 Premium User Class
class PremiumUser extends User {
  constructor(name, email) {
    super(name, email);
  }

  watchMovie(movieTitle) {
    console.log(`🎥 ${this.name} (Premium) is enjoying "${movieTitle}" in HD!`);
  }

  downloadMovie(movieTitle) {
    console.log(`⬇️ ${this.name} downloaded "${movieTitle}"`);
  }
}

// 🧪 Example Usage
const freeUser = new FreeUser("John", "john@example.com");
const premiumUser = new PremiumUser("Alice", "alice@example.com");

freeUser.showProfile();
premiumUser.showProfile();

freeUser.watchMovie("Interstellar");
freeUser.watchMovie("Inception");
freeUser.watchMovie("Tenet"); // Limit exceeded

premiumUser.watchMovie("Avatar");
premiumUser.downloadMovie("Avatar");

console.log(freeUser.getWatchedMovies());
