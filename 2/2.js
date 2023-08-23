'use strict';

const x1 = +prompt('Insert x-coordinate of point 1');
const y1 = +prompt('Insert y-coordinate of point 1');

const x2 = +prompt('Insert x-coordinate of point 2');
const y2 = +prompt('Insert y-coordinate of point 2');

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

document.getElementById(
  'target'
).innerHTML = `The euclidian distance between the two points is ${distance}.`;
