function sum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// test
console.log(sum([1, 5.2, 4, 0, -1]));

function friend(friends) {
    return friends.filter(name => name.length === 4);
}

// test

console.log(friend(["Love", "Your", "Face", "1"]));
