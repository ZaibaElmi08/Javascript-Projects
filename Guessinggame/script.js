
let input = document.getElementById('input');
let btn = document.querySelector('.btn');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random() * 100) + 1; 
console.log(answer); 

let numGuesses = 0; 


btn.addEventListener('click', function () {
  guessesNumber(); 
});

function guessesNumber() {
  let userGuess = parseInt(input.value); 

 
  if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
    wrng.innerHTML = "Error: Please enter a number between 1 and 100";
  } else {
    numGuesses++; 
    wrng.innerHTML = "";

    if (userGuess === answer) {
      wrng.innerHTML = `Congratulations! You guessed it right in ${numGuesses} tries. The number was ${answer}.`;
      btn.disabled = true; 

      let resetBtn = document.createElement('button');
      resetBtn.innerHTML = 'Play Again';
      resetBtn.classList.add('btn');
      resetBtn.addEventListener('click', function () {
        window.location.reload(); 
      });

      document.body.appendChild(resetBtn); 
    } else if (userGuess < answer) {
      wrng.innerHTML = "Too low! Try again.";
    } else {
      wrng.innerHTML = "Too high! Try again.";
    }

    guesses.innerHTML = `No of Guesses: ${numGuesses}`; // Update the guess count
  }

  input.value = ''; // Clear the input after each guess
}
