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

const score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  ties: 0
};

/*
if (score === null) {
  score = {
    win: 0,
    lose: 0,
    ties: 0
  };
}
*/

let result = '';

function choice(playerMove) {
  const compMove = randomChoice();
  
  if (playerMove === 'rock') {
    if (compMove === 'rock') {
      result = 'Tie.';
      score.tie++;
    } else if (compMove === 'paper') {
      result = 'You lose.';
      score.lose++
    } else if (compMove === 'scissors') {
      result = 'You won.';
      score.win++;
    }
  } else if (playerMove === 'paper') {
    if (compMove === 'rock') {
      result = 'You won.';
      score.win++;
    } else if (compMove === 'paper') {
      result = 'Tie.';
      score.tie++;
    } else if (compMove === 'scissors') {
      result = 'You lose.';
      score.lose++;
    }
  } else if (playerMove === 'scissors') {
    if (compMove === 'rock') {
      result = 'You lose.';
      score.lose++;
    } else if (compMove === 'paper') {          
      result = 'You won.';
      score.win++;
    } else if (compMove === 'scissors') {
      result = 'Tie.';
      score.tie++;
    }
  }

  localStorage.setItem('score', JSON.stringify(score));

  alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result} 
Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`);
}

