function createCounter() {
  let count = 0;

  return {
    increment: () => {
      count++;
      console.log(`count increment ${count}`);
    },
    decrement: () => {
      count--;
      console.log(`Count decrement ${count}`);
    },
    getValue: () => {
      console.log(`Here is the current Value ${count}`);
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.getValue();
