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

function operate(op, a, b) {
    return op(a, b);
}

let display = document.querySelector("#display");
display.innerHTML = 0;

function updateDisplay(input) {
    if (display.innerHTML == 0) {
        display.innerHTML = input;
    }
    else if (input === "clear") {
        display.innerHTML = 0;
    }
    else {
        display.innerHTML += input;
    }
}

buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        updateDisplay(button.id);
    });
});