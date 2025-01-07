/*
function function1 () {
  console.log('hello');
  console.log(2 + 2);
}

function1();
*/

function calculateTax(parameter1, taxPercent = 0.1 /* default value*/) {
  console.log(parameter1 * taxPercent);
}

calculateTax(2000, 0.2);
calculateTax(5000);