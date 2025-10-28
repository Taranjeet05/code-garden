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
    console.log(`✅ Account created for ${ownerName} (A/C No: ${accountNumber}).`);
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
