const add = function() {
    return arguments[0] + arguments[1];
};

console.log(add(11, 22, 33, 44));

const car = {
    color: "purple",
    // Don't use arrow functions with methods as this doesn't work right
    getSummary() {
        return `The car is ${this.color}`
    }
}

console.log(car.getSummary());