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

    test('Newline character as delimiter should work',()=>{
        expect(add("1\n2,3")).toBe(6);
        expect(add("1\n2\n3\n4\n5")).toBe(15);
        expect(add("1\n2\n3\n4\n5\n6\n7\n8\n9\n10")).toBe(55);
    })

    test('Custom delimiter should work',()=>{
        expect(add("//;\n1;2")).toBe(3);
    });

    test('Custom delimiter that is special character should be escaped',()=>{
        expect(add("//*\n1*2")).toBe(3);

    });

    test('Negative numbers should throw an exception with message',()=>{
        expect(()=>add("1,-2,3,-4")).toThrow("Negatives not allowed: -2,-4");
    });

    test('Numbers greater than 1000 should be ignored',()=>{
        expect(add("1001,2")).toBe(2);
        expect(add("2,1000")).toBe(1002);
    });

    test('Given delimiter with any length should work',()=>{
        expect(add("//[***]\n1***2***3")).toBe(6);
        expect(add("//[abc]\n4abc5abc6")).toBe(15);
        expect(add("//[***]\n1***2***3***4***5***6***7***8***9***10")).toBe(55);
    });

    test('Given multiple custom delimiters with any length should work',()=>{
        expect(add("//[*][%]\n1*2%3")).toBe(6);
        expect(add("//[***][#][%]\n1***2#3%4")).toBe(10);    
    });



  

});