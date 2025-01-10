console.log(document.querySelector('button').innerHTML); //pega o elemento dentro do button
document.querySelector('button')
  .innerHTML = 'Changed'; // vc pode fazer isso pra ser mais facil de ler

const buttonElement = document.querySelector('.second-button');

console.log(buttonElement);

/*
console.log(document.title);
document.title = 'Changed';

console.log(document.body); 
console.log(typeof document.body);

console.log(document.body.innerHTML);
document.body.innerHTML = '<button>Good job!</button>';
*/

/*
document.body.innerHTML = 'hello'; //remove tuda da pag e coloca hello, eh um objeto
document.title = 'Good Job!';
*/