const nums = [1, 2, 3, 4, 5];

const squared = nums.map((items) => {
  return items * items; 
});

console.log(squared);






const names = ['alice', 'bob', 'charllie', 'danielle'];

const capitalised = names.map((name) => {
  return `${name[0].toUpperCase()}${name.slice(1)}`
})

console.log(capitalised);







const pokemon = ['bulbasaur', 'charmander', 'Squirtles'];

const elements = pokemon.map((elem)=>{
  return `<p>${elem}</p>`
});

console.log(elements);

// Task 1 :: codewar

function twoSum(numbers, target) {
  const numMap = {}; 
  
  for (let i = 0; i < numbers.length; i++) { 
      const currentNum = numbers[i];         
      const complement = target - currentNum; 
      
   
      if (complement in numMap) {
         
          return [numMap[complement], i];
      }
      
   
      numMap[currentNum] = i;
  }
  
 
  return [];
}

//Task 2 :: codewar

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  
  return birds.filter(bird => !geese.includes(bird));
}
