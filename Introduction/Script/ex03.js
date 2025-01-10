function subscribe() {
  const buttonElement = document.querySelector('.subs-button');
        
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
  } else {
    buttonElement.innerHTML = 'Subscribe';
  }
}