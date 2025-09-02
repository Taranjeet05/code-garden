const squareDigits = (num) => {
  return Number(
    String(num)
      .split("")
      .map((d) => d ** 2)
      .join("")
  );
};

console.log(squareDigits(1008));
console.log(squareDigits(2005));
console.log(squareDigits(2025));
