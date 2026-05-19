// Math Functions

const res = require("express/lib/response");

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


// Variables

let firstNumber = "";

let operator = "";

let secondNumber = "";


// Select Elements

const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector("#equals");


// Operate Function

function operate(operator, firstNumber, secondNumber) {

    if (operator === "+") {
        return add(firstNumber, secondNumber);
    }

    else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    }

    else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    }

    else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    }
}

function calculate(){

    const result = operate(operator,
        Number(firstNumber),
        Number(secondNumber)
    )
    display.textContent = result
    firstNumber = result
    secondNumber = ""
}


// Number Buttons

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Store first number
        if (operator === "") {

            firstNumber += button.textContent;

            display.textContent = firstNumber;
        }

        // Store second number
        else {

            secondNumber += button.textContent;

            display.textContent = secondNumber;
        }

    });

});


// Operator Buttons

operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // If second number exists
        // calculate first
        if (secondNumber !== "") {

            calculate();

        }

        operator = button.textContent;

    });

});


// Equals Button

equalsButton.addEventListener("click", () => {

    const result = operate(
        operator,
        Number(firstNumber),
        Number(secondNumber)
    );

    display.textContent = result;

});