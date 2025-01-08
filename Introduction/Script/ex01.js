cartQuantity = 0;
function cartFull(number) {
  cartQuantity += number;
if (cartQuantity  > 10) {
  console.log('The cart is full');
  cartQuantity -= number;
  return;
} 

console.log(`Cart Quantity: ${cartQuantity}`);
}

function cartEmpty(number) {
  cartQuantity -= number; 
  if (cartQuantity  < 0) {
    console.log('Not enough items in the cart');
    cartQuantity += number;
    return;
  } 
    
  console.log(`Cart Quantity: ${cartQuantity}`);
}