const add = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('Empty string should return 0', () => {
    expect(add("")).toBe(0);
  });
});