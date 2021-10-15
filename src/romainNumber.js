function romainNumber(number) {
    let response = '';
    if (number <= 10) {
        if (number <= 3) {
            for (let i = 1; i <=number; i++) {
                response += "I"
            }
        }
    }
    
    return response
}

module.exports = romainNumber;