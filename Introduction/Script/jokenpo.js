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

/*
if (score === null) {
  score = {
    win: 0,
    lose: 0,
    tie: 0
  };
}
*/

let score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
};



function choice(playerMove) {
  let result = '';
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

  updateScore();

  function resultChange() {
    const resultTitle = document.querySelector('.results-title');
    const resultText = document.querySelector('.results-content');
    resultTitle.innerHTML = `${result}`;
    resultText
      .innerHTML = `You <img src="imgs/${playerMove}-emoji.png"> <img src="imgs/${compMove}-emoji.png"> Computer`;
  }

  resultChange();
  
  localStorage.setItem('score', JSON.stringify(score));
  //alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result} 
//Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`);
}

function updateScore() {
  const scoreText = document.querySelector('.score');
  scoreText.innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

