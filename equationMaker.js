const random = require('./random');
const subtract = require('./subtract');
const sum = require('./sum');

function equation(operator) {
  let answer = random(99);
  let secondNumber = random(30)
  let firstNumber = 0;

  if('addition' == operator) {
    console.log('we have reached addition');
    firstNumber = subtract(answer, secondNumber);
  }
  if('subtraction' == operator) {
    console.log('we have reached subtraction');
    firstNumber = sum(answer, secondNumber);
  }
  
  return [
    firstNumber,
    operator,
    secondNumber,
    answer,
  ];

  }
  module.exports = equation;