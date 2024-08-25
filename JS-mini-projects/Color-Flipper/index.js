const body = document.getElementsByTagName("body") [0];



function changeColor (color) {
body.style.backgroundColor = color;
}

function randomColor () {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`;
}

//Add Event listner to the buttons.

document.getElementsByClassName('red')[0].addEventListener('click', function () {
  changeColor ('red');
});


document.getElementsByClassName('green')[0].addEventListener('click', function () {
  changeColor ('green');
});

document.getElementsByClassName('blue')[0].addEventListener('click', function () {
  changeColor ('blue');
});



document.getElementsByClassName('random')[0].addEventListener('click', function () {
  changeColor(randomColor());
});


