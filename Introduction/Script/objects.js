/*const products = {
  name:  'socks',
  price: 1090
};

console.log(products);
console.log(products.name);
console.log(products.price);

products.name = 'cotton socks';
console.log(products);

products.newProperty = true;
console.log(products);

delete  products.newProperty;
console.log(products);*/

/*
const product2 = {
  name: 'shirt',
  'delivery-time': '1 day',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function function1 () {
    console.log('function inside objects')
  }
};
console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);

console.log(product2.rating.count);
product2.fun();

console.log(typeof console.log);

console.log(JSON.stringify(product2)); /*util pra compartilhar programas e dados, nao suporta functions

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));*/

console.log('hello' .length);
console.log('hello' .toUpperCase());

const object1 = {
  message: 'hello'
};

const object2 = object1;

object1.message = 'Good job!';
console.log(object1);
console.log(object2);

const object3 = {
  message: 'Good job!'
};

console.log(object3 === object1);
console.log(object2 === object1);

const object4 = {
  message: 'Good job!',
  price: 799
};
// const message = object4.message;
const {message, price} = object4; //shorthand properties
console.log(message);
console.log(price);

const object5 = {
  // message: message
  message,
  //method: function function1() {
  //  console.log('method');
  //}
  method() {
    console.log('method');
  } //shorthand method
};

console.log(object5);