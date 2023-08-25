'use strict';

// prompt user for integer
const num = +prompt('Insert positive integer');

// generate multiplication table
for (let a = 1; a <= num; a++) {
  // outer loop for rows
  const tr = document.createElement('tr');
  for (let b = 1; b <= num; b++) {
    // inner loop for columns
    const item = a * b;
    const td = document.createElement('td');
    td.innerText = item;
    tr.appendChild(td);
  }
  // insert results into the table (in outer loop?)
  document.getElementById('target').appendChild(tr);
}
