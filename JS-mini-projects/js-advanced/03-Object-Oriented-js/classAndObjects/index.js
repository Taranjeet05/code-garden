// !-- Es6 classes constructor, methods and extends, super
class Video {
  constructor(title, duration, channelName, views, textColor) {
    this.title = title;
    this.duration = duration;
    this.channelName = channelName;
    this.views = views;
    this.textColor = textColor;
  }

  erase() {
    document.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.textColor) {
        elem.remove();
      }
    });
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.textColor;
    document.body.append(h1);
  }
}

const video1 = new Video(
  "10 Days Challenge",
  "15 min",
  "Mr.Beast",
  "10 M",
  "orange"
);
const video2 = new Video(
  "Advance JS",
  "5 Hour",
  "Donald Trump",
  "100 M",
  "white"
);

const video3 = new Video("DSA", "12 Hour", "BINGO", "1 M", "green");

video1.write("10 days surviving in Amazon");
video1.write("10 days surviving in Amazon");
video1.write("10 days surviving in Amazon");
video1.write("10 days surviving in Amazon");
video2.write("Advance JS, OOPS");
video2.write("Advance JS, OOPS");
video2.write("Advance JS, OOPS");
video2.write("Advance JS, OOPS");
video3.write("Data Structure and algorithm");
video3.write("Data Structure and algorithm");
video3.write("Data Structure and algorithm");
video3.write("Data Structure and algorithm");

video1.erase();
video2.erase();
video3.erase();

// !-- Extends, and Super

class User {
  constructor(name, address, userName, email) {
    this.name = name;
    this.address = address;
    this.userName = userName;
    this.email = email;
    this.role = "user";
  }

  checkRole() {
    console.log(`you are: ${this.role}`);
  }

  write(text) {
    const p = document.createElement("p");
    p.textContent = `${this.userName} : ${text}`;
    document.body.appendChild(p);
  }
}
class Admin extends User {
  constructor(name, address, userName, email) {
    super(name, address, userName, email);
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("p").forEach((el) => {
      el.remove();
    });
  }
}

const t1 = new User("Joe Doe", "New Delhi", "Joe_05.", "joe@zoho.com");
const t2 = new User(
  "Mark Henry",
  "london",
  "Henry._Mark",
  "henrymark205@zoho.com"
);

t1.write("This is my first Post");
t2.write("Good Morning,");

const a1 = new Admin("zoi", "Berlin", "zoi_01", "admin@zoho.com");
const a2 = new Admin("zoi", "Berlin", "zoi_01", "admin@zoho.com");
a1.write(`Hello for the Admin, Happy coding to all of you`);

// a1.remove()

t1.checkRole(); // user
a1.checkRole(); // admin

// *************

// !--- Prototypal inheritance vs classical inheritance 
// CLASSICAL INHERITANCE has been already use above that basically using of extend thing
//  to inheritance from some thing like, we use extend User in Admin Class.

// !-- prototypal inheritance
// passing or inherit props/methods to another object

let coffee = {
    color : 'black',
    drink : function() {
        console.log('Nice')
    }
}

let coffee2 = Object.create(coffee);

console.log(coffee2);

coffee2.taste = 'yummy';
coffee2.drink();
