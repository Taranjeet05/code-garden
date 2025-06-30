// MAP

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((number) => {
  return number * 2;
});

console.log(doubled);

const users = [
  { name: "joe", age: 20 },
  { name: "jane", age: 25 },
  { name: "jack", age: 30 },
  { name: "jill", age: 35 },
];

const userNames = users.map((user) => user.name);

console.log(userNames);
