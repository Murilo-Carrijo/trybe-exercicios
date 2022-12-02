const operations = require('./script');

test('sums two values', () => {
  expect(operations.sum(2, 3)).toEqual(5);
});

test('subtract two values', () => {
  expect(operations.subtract(5, 4)).toEqual(1);
});

test('multiplication tow values', () => {
  expect(operations.multiplication(2, 3)).toEqual(6);
});

test('division two values', () => {
  expect(operations.division(4, 2)).toEqual(2);
});