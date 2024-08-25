const input = document.getElementById('Palindrome-Checker');

function reverseString(string) {
  return string.split('').reverse().join('');
}

// Function to check if the input is a palindrome
function check() {
  const value = input.value;
  const reverse = reverseString(value);

  if (value === reverse) {
    alert('P A L I N D R O M E');
  } else {
    alert('Is not a P A L I N D R O M E');
  }

  input.value = ''; 
}

// Adding an event listener to the button with class 'Check-btn'
document.getElementsByClassName('Check-btn')[0].addEventListener('click', function() {
  check(); 
});
