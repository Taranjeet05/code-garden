const progressBar = document.querySelector("#progressBar");
const percentText = document.querySelector("#percentText");
const h2 = document.querySelector('h2')

let count = 0;
let seconds = 5;

let progress = setInterval(() => {
  if (count < 100) {
    count++;
    progressBar.style.width = `${count}%`;
    percentText.textContent = `${count}%`;
  } else {
    h2.textContent = 'Downloaded.'
    clearInterval(progress);
  }
}, (seconds * 1000) / 100);
