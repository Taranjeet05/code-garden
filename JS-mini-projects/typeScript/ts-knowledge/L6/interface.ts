interface Person {
  name: string;
  age: number;
  speak(): void;
}

class Human implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log("Hello! I can speak.");
  }
}

const singh = new Human("Singh", 20);
singh.speak();

interface Animal {
  name: string;
  age: number;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  makeSound() {
    console.log("Woof! Woof!");
  }
}

class Cat implements Animal {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  makeSound() {
    console.log("Meow! Meow!");
  }
}

const dog = new Dog("Buddy", 3);
const cat = new Cat("Whiskers", 2);
dog.makeSound();
cat.makeSound();

interface DrivingSchool {
  name: string;
  location: string;
  teachDriving(): void;
}

class DrivingSchoolImlementation implements DrivingSchool {
  name: string;
  location: string;

  constructor(name: string, location: string) {
    this.name = name;
    this.location = location;
  }
  teachDriving(): void {
    console.log(
      `My name is ${this.name} and learning Driving in ${this.location}`
    );
  }
}

const drivingSchool = new DrivingSchoolImlementation(
  "Singh",
  "Delhi"
);
drivingSchool.teachDriving();
