'use strict';

const degreesC = +prompt('Insert degrees as celcius');

const degreesF = (degreesC * 9) / 5 + 32;
const degreesK = degreesC + 273.15;

const answer = `${degreesC} degrees celsius equals to ${degreesF} degrees fahrenheit and ${degreesK} degrees kelvin.`;

// printing
document.getElementById('target').innerHTML = answer;
