let cartQuantity =  JSON.parse(localStorage.getItem('cartQuantity'));

document.querySelector('.display-quantity')
  .innerHTML = `Cart Quantity: ${cartQuantity}`

function cartFull(number) {
  cartQuantity += number;
  if (cartQuantity  > 10) {
    cartQuantity -= number;
    document.querySelector('.display-quantity')
      .innerHTML = `The cart is full.\nCart Quantity: ${cartQuantity}`
    return;
  } 
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

  document.querySelector('.display-quantity')
   .innerHTML = `Cart Quantity: ${cartQuantity}`;
}

function cartEmpty(number) {
  cartQuantity -= number; 
  if (cartQuantity  < 0) {
    cartQuantity += number;
    document.querySelector('.display-quantity')
      .innerHTML = `Not enough items in the cart.\nCart Quantity: ${cartQuantity}`
    return;
  } 
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

  document.querySelector('.display-quantity')
    .innerHTML = `Cart Quantity: ${cartQuantity}`;
}

function cartReset() {
  cartQuantity = 0;
  localStorage.setItem('cartQuantity', JSON.stringify(cartQuantity));

  document.querySelector('.display-quantity')
  .innerHTML = `Cart was Reset.\nCart Quantity: ${cartQuantity}`;
}

