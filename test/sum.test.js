// Add the unit tests of the sum function here
const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds bonjour + 2 to equal false', () => {
    expect(sum("bonjour", 2)).toBe(false);
});

test('adds 1 + bonjoir  to equal Ce nest pas des nombres', () => {
    expect(sum(1, "bonjoir")).toBe(false);
});