const displayCount = document.querySelector('.count');
const addBtn = document.querySelector('.plus--btn'); 
const minusBtn = document.querySelector('.minus--btn'); 
const resetBtn = document.querySelector('.reset--btn');
const inputNumber = document.querySelector('.input--number');

// Ensure displayCount starts with a number
if (isNaN(parseInt(displayCount.innerHTML))) {
    displayCount.innerHTML = 0; 
}

addBtn.addEventListener('click', () => {
    const countValue = parseInt(displayCount.innerHTML);
    const inputNumberValue = parseInt(inputNumber.value);
    displayCount.innerHTML = countValue + inputNumberValue;
});

minusBtn.addEventListener('click', () => {
    const countValue = parseInt(displayCount.innerHTML);
    const inputNumberValue = parseInt(inputNumber.value);
    displayCount.innerHTML = countValue - inputNumberValue;
});

resetBtn.addEventListener('click', () => {
    displayCount.innerHTML = 0;
});










