const equation = require('./equationMaker');
const sum = require('./sum');
const subtract = require('./subtract');

test('We expect subtraction to be correct', () => {
  let array = equation('subtraction');
  let firstNumber  = array[0];
  let operator     = array[1];
  let secondNumber = array[2];
  let answer       = array[3];

  if('subtract' === operator) {
    expect(subtract(firstNumber, secondNumber)).toBe(answer);
  }
});

test('We expect addition to be correct', () => {
  let array = equation('addition');
  let firstNumber  = array[0];
  let operator     = array[1];
  let secondNumber = array[2];
  let answer       = array[3];

  if('addition' === operator) {
    expect(sum(firstNumber, secondNumber)).toBe(answer);
  }
});