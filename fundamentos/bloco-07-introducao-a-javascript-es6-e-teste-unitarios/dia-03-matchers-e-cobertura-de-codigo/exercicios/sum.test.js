const sum = require('./sum');

describe('Test sum function', () => {
  test('Test if sum(4, 5) return 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('Test if sum(0, 0) return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('Test if sum("4", 0) return Error', () => {
    expect(() => { sum('4', 0) }).toThrow();
  });
});