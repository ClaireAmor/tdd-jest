// Add the unit tests of the sum function here
const {fizzBuzzGame, callFizzBuzzGame, multiplication} = require('../src/multiplication');

//Multiplication
test('multiplication 1 * 2 to equal 2', () => {
    expect(multiplication(1, 2)).toBe(2);
});

test('multiplication bonjour * 2 to equal false', () => {
    expect(multiplication("bonjour", 2)).toBe(false);
});

test('multiplication 1 * bonjoir to equal false', () => {
    expect(multiplication(1, "bonjoir")).toBe(false);
});

//FizzBuzzGame
test('GameFizzBuzz 3 to equal Fizz', () => {
    expect(fizzBuzzGame(3)).toBe("Fizz");
});

test('GameFizzBuzz 5 to equal Buzz', () => {
    expect(fizzBuzzGame(5)).toBe("Buzz");
});

test('GameFizzBuzz 15 to equal FizzBuzz', () => {
    expect(fizzBuzzGame(15)).toBe("FizzBuzz");
});

test('GameFizzBuzz 1 to equal 1', () => {
    expect(fizzBuzzGame(1)).toBe(1);
});

