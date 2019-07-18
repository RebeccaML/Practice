function handleCalculation(operator, a, b) {
    if (operator === "add") {
        add(a, b);
    } else if (operator === "subtract") {
        subtract(a, b);
    } else if (operator === "multiply") {
        multiply(a, b);
    } else if (operator === "divide") {
        divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let display = document.querySelector("#display");
display.innerHTML = 0;
let operator = "";
let num1 = 0;
let num2 = 0;
let temp = 0;

function handleInput(input) {
    if (input === "add") {
        updateDisplay("+");
    } else if (input === "subtract") {
        updateDisplay("-");
    } else if (input === "multiply") {
        updateDisplay("×");
    } else if (input === "divide") {
        updateDisplay("÷");
    } else {
        updateDisplay(input);
    }
    calculation.push(input);
    console.log(calculation);
    if (calculation.length === 3) {
        handleCalculation(calculation);
    }
    if (input === "clear") {
        display.innerHTML = 0;
        calculation = [];
        num1 = 0;
        num2 = 0;
    }
}

function updateDisplay(input) {
    if (display.innerHTML == 0) {
        display.innerHTML = input;
    } else {
        display.innerHTML += input;
    }
}

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        handleInput(button.id);
    });
});