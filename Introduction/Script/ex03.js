function subscribe() {
  const buttonElement = document.querySelector('.subs-button');
        
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subs');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.toggle('is-subs');
  }
}

function orderValue() {
  const barContent = document.querySelector('.order-bar');
  const result = document.querySelector('.js-result');
  let cost = eval(barContent.value); // ou usa Number();
  if (result.classList.contains('error-msg')) {
    result.classList.remove('error-msg');
  }

  if (cost < 40) {
    if (cost < 0) {
      result.classList.add('error-msg');
      return (result.innerHTML = 'Error: cost cannot be less than $0');
    }
    cost += 10;
  }

  result.innerHTML = `$${cost.toFixed(2)}`
}

function enterFunction(event) {
  if (event.key === 'Enter') {
    orderValue();
  }
}