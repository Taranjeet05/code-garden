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
