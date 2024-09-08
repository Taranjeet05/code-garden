const stoneButton = document.querySelector('[data-js="stone-btn"]');
const paperButton = document.querySelector('[data-js="paper-btn"]');
const scissorsButton = document.querySelector('[data-js="scissors-btn"]');

// To Do..

/*1. We need to add a function for the computer move using math.random()
  2. we need to add another function for the getting result and display result 
     as alert on the page.  
  3. we need to call the function by adding event listner. */


// Function for the computer's move
const getComputerMove = () => {
  let randomValue = Math.floor(Math.random() * 3);
  if (randomValue === 0) {
    return 'stone';
  } else if (randomValue === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

// Function for the game result
const gameResult = (playerMove) => {
  const computerMove = getComputerMove(); 

  let result;
  if (computerMove === playerMove) {
    result = 'TIE';
  } else if (
    (playerMove === 'stone' && computerMove === 'scissors') ||
    (playerMove === 'scissors' && computerMove === 'paper') ||
    (playerMove === 'paper' && computerMove === 'stone')
  ) {
    result = 'YOU WIN';
  } else {
    result = 'YOU LOSE';
  }

  alert(`Your move is ${playerMove} and computer's move is ${computerMove}. Result: ${result}`);
};

// Adding Event Listeners
stoneButton.addEventListener('click', () => {
  gameResult('stone'); 
});

paperButton.addEventListener('click', () => {
  gameResult('paper'); 
});

scissorsButton.addEventListener('click', () => {
  gameResult('scissors'); 
});
