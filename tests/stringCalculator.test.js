const add = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('Empty string should return 0', () => {
    expect(add("")).toBe(0);
  });
  test('Single number string should return that number', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
    expect(add("42")).toBe(42);
    expect(add("999")).toBe(999);
  });
  

});