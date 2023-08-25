'use strict';

// prompt the user for a natural number
const num = +prompt('Insert a natural number');

// calculate the sum (triangular number)
let sum = 0;
for (let i = 0; i <= num; i++) {
  sum += i;
}

// display the result
document
  .getElementById('target')
  .insertAdjacentHTML(
    'beforeend',
    `The sum of natural numbers up to and including ${num} is ${sum}.`
  );
