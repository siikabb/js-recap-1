'use strict';

// Scores between 0 and 39 receive a grade of 0.
// Scores between 40 and 51 receive a grade of 1.
// Scores between 52 and 63 receive a grade of 2.
// Scores between 64 and 75 receive a grade of 3.
// Scores between 76 and 87 receive a grade of 4.
// Scores between 88 and 100 receive a grade of 5.

// prompt for score
const score = +prompt('Insert your score from the course (0-100)');
let grade = 0;

// convert score to grade
if (score >= 40) {
  // grade = ((score - 40) / 12 + 1).toFixed();
  grade = Math.floor((score - 40) / 12 + 1);
  // exception for score 100 because i am too lazy to handle this properly along with the cheating protection
  if (score === 100) {
    grade = 5;
  }
}

// display grade
let message = '';
if (grade <= 5) {
  message = `Your score of ${score} gives you a grade ${grade}.`;
} else if (grade >= 6) {
  message = 'You damn cheater!';
} else {
  message = 'Invalid score!';
}

document.getElementById('target').insertAdjacentHTML('beforeend', message);
