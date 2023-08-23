'use strict';

const side1 = +prompt('Enter length of side 1 of the triangle');
const side2 = +prompt('Enter length of side 2 of the triangle');
const side3 = +prompt('Enter length of side 3 of the triangle');

let result = '';

if (side1 === side2 && side2 === side3) {
  // equilateral
  result = 'equilateral';
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  // isosceles
  result = 'isosceles';
} else {
  // scalene
  result = 'scalene';
}

document.getElementById('target').insertAdjacentHTML('beforeend', result);
