const arr = [1, 2, 3];
console.log(arr.length);

arr.push(4);
console.log(arr);

arr.unshift(0);
console.log(arr); // unshift adds an element to the beginning

arr.pop();
console.log(arr); // pop removes the last element 

arr.shift()
console.log(arr) // shifts removes an element to the beginning

console.log(arr.at(2));
