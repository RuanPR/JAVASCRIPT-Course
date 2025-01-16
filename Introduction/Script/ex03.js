function subscribe() {
  const buttonElement = document.querySelector('.subs-button');
        
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
  } else {
    buttonElement.innerHTML = 'Subscribe';
  }
}

function orderValue() {
  const barContent = document.querySelector('.order-bar');
  let cost = eval(barContent.value); // ou usa Number();
  
  if (cost < 40) {
    cost += 10;
  }

  document.querySelector('.js-result').innerHTML = `$${cost.toFixed(2)}`
}

function enterFunction(event) {
  if (event.key === 'Enter') {
    orderValue();
  }
}