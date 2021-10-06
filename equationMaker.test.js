const equation = require('./equationMaker');
const sum      = require('./sum');
const subtract = require('./subtract');
const { expect } = require('@jest/globals');

console.log(equation('addition'));
console.log(equation('addition'));
console.log(equation('subtraction'));
console.log(equation('subtraction'));

test('We expect subtraction to be correct', () => {
  let array = equation('subtraction');
  let firstNumber  = array[0];
  let operator     = array[1];
  let secondNumber = array[2];
  let answer       = array[3];
    expect(operator).toBe('subtraction');
    expect(firstNumber).toBeGreaterThan(secondNumber);
    expect(firstNumber).toBeGreaterThan(answer);
    expect(answer + secondNumber).toBe(firstNumber);
    expect(subtract(firstNumber, secondNumber)).toBe(answer);
});

test('We expect addition to be correct', () => {
  let array = equation('addition');
  let firstNumber  = array[0];
  let operator     = array[1];
  let secondNumber = array[2];
  let answer       = array[3];
    expect(operator).toBe('addition');
    expect(firstNumber).toBeLessThan(answer);
    expect(answer - secondNumber).toBe(firstNumber);
    expect(sum(firstNumber, secondNumber)).toBe(answer);
});