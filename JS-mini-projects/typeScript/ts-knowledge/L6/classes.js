"use strict";
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
const taran = new Student("Taranjeet Singh", 20);
taran.introduce();
class Teacher {
    constructor(name, subject) {
        this.name = name;
        this.subject = subject;
    }
    teach() {
        console.log(`My Name is ${this.name} and I teach ${this.subject}.`);
    }
}
