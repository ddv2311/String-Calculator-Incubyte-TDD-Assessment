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

  test('Two number string separated by comma should return the sum of the numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("5,10")).toBe(15);
    expect(add("42,1")).toBe(43);
    expect(add("999,1")).toBe(1000);
  });

  test('Multiple number string separated by comma should return the sum of the numbers', () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });

  

});