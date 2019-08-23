let add = function(a, b, c) {
    return a + b + c;
}

let result = add(4, 9, 8);
console.log(result);

let getScoreText = function(name, score) {
    return `Name: ${name} - Score: ${score}`;
}

console.log(getScoreText("Rebecca", 344));

let calculateTip = function(total, tipPercent = .2) {
    let tip = total * tipPercent;
    let percent = tipPercent * 100;
    return `A ${percent}% tip on $${total} would be $${tip}.`;
}

console.log(calculateTip(100));

let name = "Rebecca";
let age = 31;
console.log(`My name is ${name} and I am ${age} years old.`);