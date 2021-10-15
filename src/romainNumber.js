const allLetter = [
    [1000,'M'],
    [900,'CM'],
    [500,'D'],
    [400,'CD'],
    [100,'C'],
    [90,'XC'],
    [50,'L'],
    [40,'XL'],
    [10,'X'],
    [9,'IX'],
    [5,'V'],
    [4,'IV'],
    [1,'I'],
]

// if (number <= 10) {
//     if (number <= 3) {
//         for (let i = 1; i <=number; i++) {
//             response += "I"
//         }
//     }
// }
function romainNumber(number) {``
    let response = '';
    
    allLetter.forEach(letter => {
        while (number >= letter[0]) {
            response += letter[1]
            number -= letter[0];
            console.log(2)
        }
    })
    
    return response;
}

module.exports = romainNumber;