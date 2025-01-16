let calculation = '';
document.querySelector('.result').innerHTML = JSON.parse(localStorage.getItem('calculation'));

function updateCalculation(x) {
  calculation += `${x}`
  localStorage.setItem('calculation', JSON.stringify(calculation));

  document.querySelector('.result').innerHTML = calculation;
}