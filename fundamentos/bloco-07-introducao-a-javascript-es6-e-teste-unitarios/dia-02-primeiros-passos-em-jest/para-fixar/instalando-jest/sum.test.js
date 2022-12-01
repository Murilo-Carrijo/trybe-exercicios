const sum = (a , b) => {
  return a + b;
};

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
});