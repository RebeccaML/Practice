const sumAll = function(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR"
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } 
    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);
    return ((max*(max+1) - (min-1)*min)) / 2;
}

module.exports = sumAll
