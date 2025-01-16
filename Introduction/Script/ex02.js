function coinFlip() { 
  const headOrTail = Math.random();
  let coin = '';
  if (headOrTail >= 0 && headOrTail < 1 / 2) {
    coin = 'Heads';
  } else
    coin = 'Tails';

  return coin;
} 

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
};

let result = '';

function playerChoice(playerMove) {
  const coin = coinFlip();

  if (playerMove === 'Heads') {
    if (coin === 'Heads') {
      result = 'You won.'
      score.wins++;
    } else if (coin === 'Tails') {
      result = 'You lose.'
      score.losses++;
    }
  } else if (playerMove === 'Tails') {
    if (coin === 'Heads') {
      result = 'You lose.'
      score.losses++;
    } else if (coin === 'Tails') {
      result = 'You won.'
      score.wins++;
    }
  }

  localStorage.setItem('score', JSON.stringify(score));
  let playerChoice = document.querySelector('.player-choice');
  playerChoice.innerHTML = `The result was ${coin}.
${result}
Wins: ${score.wins}, Losses: ${score.losses}`

}