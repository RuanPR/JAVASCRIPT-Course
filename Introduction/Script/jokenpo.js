let compMove = '';

function randomChoice() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
  compMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
  compMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
  compMove = 'scissors';
  }

  return compMove;  
}

let tie = '';
let win = '';
let lose = '';
let result = '';

function choice(playerMove, result1, result2, result3) {
  const compMove = randomChoice();
  
  if (compMove === 'rock') {
    result = result1;
    /*tie++;*/
  } else if (compMove === 'paper') {
    result = result2;
    /*lose++*/
  } else if (compMove === 'scissors') {
    result = result3;
    /*win++;*/
  }

  alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}`);
}

let score = `Wins: ${win}, Losses: ${lose}, Ties: ${tie}`;