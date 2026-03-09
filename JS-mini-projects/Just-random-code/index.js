function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();

counter();
counter();
counter();
counter();

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      console.log("Count Increment:", count);
    },
  };
}

const counter1 = createCounter();

counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.getCount();
