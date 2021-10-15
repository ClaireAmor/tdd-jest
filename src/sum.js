// Implement the sum function here
function sum(firstNumber, secondNumber) {
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        return firstNumber + secondNumber;
    }
    return false;
}

module.exports = sum;