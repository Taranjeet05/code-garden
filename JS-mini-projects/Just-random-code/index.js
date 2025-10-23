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
console.log(descendingOrder(0));


let i = 0;
const interval = setInterval(() => {
  console.log(i);
  i++;
  if (i === 5) clearInterval(interval);
}, 1000);
