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
