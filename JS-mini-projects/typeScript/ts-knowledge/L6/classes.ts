class Student {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  introduce(): void {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const taran = new Student("Taranjeet Singh", 20);
taran.introduce();

class Teacher {
  name: string;
  subject: string;

  constructor(name: string, subject:string) {
    this.name = name; 
    this.subject = subject;
  }
  teach(): void {
    console.log(`My Name is ${this.name} and I teach ${this.subject}.`);
  }
}