// Implement the sum function here
function sum(firstNumber, secondNumber) {
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        return firstNumber + secondNumber;
    }
    throw new Error("Parameter(s) is not a number!");
}

module.exports = sum;