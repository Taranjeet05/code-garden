class car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`The ${this.brand}, ${this.model} is starting 🚗🚘...`);
  }

  getCarInfo() {
    return `Brand: ${this.brand}, model: ${this.model}, year: ${this.year}`;
  }
}

const myCar = new car("Tesla", "Model S", 2023);
myCar.start();
console.log(myCar.getCarInfo());
