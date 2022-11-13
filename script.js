'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const resetGame = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector(`.score`).textContent = score;
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = '15rem';
  document.querySelector(`body`).style.backgroundColor = '#222';
  document.querySelector(`.guess`).value = '';
};

document.querySelector(`.again`).addEventListener(`click`, function () {
  resetGame();
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is in no input
  if (!guess) {
    displayMessage(`No number! 😢`);

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.number`).textContent = secretNumber;
    displayMessage(`🎉 Correct Number!`);
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = '30rem';
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage('You lost the game! Try Again!');
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
