// Add the unit tests of the sum function here
const romainNumber = require('../src/romainNumber');


test('romainNumber 1 to equal I', () => {
    expect(romainNumber(1)).toBe("I");
});

test('romainNumber 2 to equal II', () => {
    expect(romainNumber(2)).toBe("II");
});


// test('romainNumber 7 to equal VII', () => {
//     expect(multiplication(7)).toBe("VII");
// });

// test('romainNumber 10 to equal X', () => {
//     expect(multiplication(10)).toBe("X");
// });
