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

