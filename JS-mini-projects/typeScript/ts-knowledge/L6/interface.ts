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

const singh = new Human('Singh', 20);
singh.speak();
