// Task:
// Your function receives a non-negative integer. You need to rearrange the digits of this integer in descending order to create the highest possible number.

function descendingOrder(n) {
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
console.log(descendingOrder(2005));
console.log(descendingOrder(2025));
