const random = require('./random');

test('Generate a random number between 0 and 37', () => {
  expect(random(37)).toBeGreaterThan(0);
});