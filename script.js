'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector(`.number`).textContent = secretNumber;

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  score = 20;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.number`).style.width = '15rem';
  document.querySelector(`body`).style.backgroundColor = '#222';
  document.querySelector(`.guess`).value = '';
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is in no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `No number! 😢`;

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector(`.number`).style.width = '30rem';

    // When guessing too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = 'Too high!';
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent =
        'You lost the game! Try Again!';
      document.querySelector(`.score`).textContent = 0;
    }

    // When guessing too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = 'Too low!';
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent =
        'You lost the game! Try Again!';
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
