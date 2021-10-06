const random = require('./random');

test('Generate a random number between 0 and 37', () => {
  expect(random(37)).toBeGreaterThan(0);
  
  // highly improbable that we get 
  // the same number twice in a row
  expect(random(37)).not.toBe(random(37));
});