// Implement the sum function here
function multiplication(firstNumber, secondNumber) {
    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
        return firstNumber * secondNumber;
    }
    return false;
}

function fizzBuzzGame(number) {
    let response = '';
    if (number % 3 == 0) {
        response += "Fizz"
    }
    if (number % 5 == 0) {
        response += "Buzz"
    }
    if (response == '') {
        response = number;
    }
    return response;
}

function callFizzBuzzGame() {
    for (let number = 1 ; number <= 100 ; number ++) {
        console.log(fizzBuzzGame(number));
    }
}


let allfunctions = {
    fizzBuzzGame,
    multiplication,
    callFizzBuzzGame,
}

module.exports = allfunctions;