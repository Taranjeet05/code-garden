"use strict";
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log("Hello! I can speak.");
    }
}
const singh = new Human('Singh', 20);
singh.speak();
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat {
    constructor(name, age) {
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
