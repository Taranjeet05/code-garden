let secondsElapsed = 0;
let interval = null;
const time = document.getElementsByClassName('time')[0];


function padStart (value) {
  return String(value).padStart(2, '0');
}

function displayTime () {
  const minutes = Math.floor(secondsElapsed / 60);
  const seconds = secondsElapsed % 60;
  time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer () {
  secondsElapsed ++;
  displayTime();
}


function startClock() {
if (interval) stopClock()
  interval = setInterval (timer, 1000);
  

}


function stopClock() {
clearInterval(interval);
}


function resetClock() {
stopClock()
secondsElapsed = 0;
displayTime();
}



// adding event lisner to the buttons

document.getElementsByClassName('start-btn')[0].addEventListener('click', function(){
startClock();
});

document.getElementsByClassName('stop-btn')[0].addEventListener('click', function() {
stopClock();
});

document.getElementsByClassName('reset-btn')[0].addEventListener('click', function() {
resetClock();
});
 