let greetUser = function() {
    console.log("Welcome user!");
}

greetUser();

let square = function(num) {
    let result = num * num;
    return result;
}

let value = square(4);
console.log(value);

let convert = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

console.log(convert(32));
console.log(convert(68));