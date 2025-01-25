function toggleButton(select) {
  const buttonElement = document.querySelector(select);
  if (buttonElement.classList.contains('button-on')) {
    buttonElement.classList.remove('button-on');
  } else if (!buttonElement.classList.contains('button-on')) {
    offPreviousButton();
    buttonElement.classList.add('button-on');
  }
}

function offPreviousButton() {
  const previousButton = document.querySelector('.button-on');
  if (previousButton) {
    previousButton.classList.remove('button-on');
  }
}