// Add the unit tests of the sum function here
const romainNumber = require('../src/romainNumber');


test('romainNumber 1 to equal I', () => {
    expect(romainNumber(4)).toBe("IV");
});

test('romainNumber 2 to equal II', () => {
    expect(romainNumber(949)).toBe("CMXLIX");
});


// test('romainNumber 7 to equal VII', () => {
//     expect(multiplication(7)).toBe("VII");
// });

// test('romainNumber 10 to equal X', () => {
//     expect(multiplication(10)).toBe("X");
// });
