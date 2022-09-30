'use strict';
/*
document.querySelector('.message').textContent = 'Halla brur';
document.querySelector('.number').textContent = 13;
document.querySelector('.number').textContent = 50;

document.querySelector('.guess').value = 50;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
let highscore = 0

const displayMessage = function (message){
  document.querySelector('.message').textContent = message
}

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = '';
  document.querySelector("body").style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'
})

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔️ No number');
  } 
  
  //When player wins
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'
    
    if (score > highscore) {
      highscore = score
      document.querySelector('.highscore').textContent = highscore
    }
  } 
  
  //When guess is NOT secret number
  else if (guess !== secretNumber){
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too low' : "Too high");
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😭 You lost the game!');
      document.querySelector('.score').textContent = 0;
      document.querySelector("body").style.backgroundColor = '#60b347';
    }
  }
});


console.log(score);
