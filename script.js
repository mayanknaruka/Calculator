
// Math Functions

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

    // Prevent divide by 0
    if (b === 0) {
        return "Error: Divide by 0";
    }

    return a / b;
}


// Variables

let firstNumber = "";
let operator = "";
let secondNumber = "";
let shouldResetDisplay = false;


// Select Elements

const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector("#decimal");


// Operate Function

function operate(op, a, b) {
    if (op === "+") return add(a, b);
    if (op === "-") return subtract(a, b);
    if (op === "*") return multiply(a, b);
    if (op === "/") return divide(a, b);
}


// Calculate Function

function calculate() {
    const result = operate(operator, Number(firstNumber), Number(secondNumber));

    // Handle divide by zero
    if (result === "Error: Divide by 0") {

        display.textContent = result;

        firstNumber = "";

        secondNumber = "";

        operator = "";

        shouldResetDisplay = true;

        return;
    }

    // Round long decimals
    const roundedResult = Math.round(result * 1e9) / 1e9;

    display.textContent = roundedResult;
    firstNumber = String(roundedResult);
    secondNumber = "";
    shouldResetDisplay = true;
}


// Number Buttons

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // After a result, if no operator yet, start a brand-new calculation
        if (shouldResetDisplay && operator === "") {

            firstNumber = "";

            display.textContent = "";

            shouldResetDisplay = false;
        }

        // Store first number
        if (operator === "") {

            firstNumber += button.textContent;

            display.textContent = firstNumber;
        }

        // Store second number
        else {

            shouldResetDisplay = false;

            secondNumber += button.textContent;

            display.textContent = secondNumber;
        }

    });

});


// Operator Buttons

operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // No number entered yet, do nothing
        if (firstNumber === "") return;

        // Consecutive operator press with no second number, just update operator
        if (secondNumber === "") {

            operator = button.textContent;

            shouldResetDisplay = false;

            return;
        }

        // Both numbers present, evaluate first then set new operator
        calculate();

        operator = button.textContent;

        shouldResetDisplay = false;

    });

});


// Equals Button

equalsButton.addEventListener("click", () => {
    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
        calculate();
        operator = "";
    }
});


// Clear Button

clearButton.addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    shouldResetDisplay = false;
    display.textContent = "0";
});


// Decimal Button

decimalButton.addEventListener("click", () => {

    // After a result with no operator, start fresh
    if (shouldResetDisplay && operator === "") {

        firstNumber = "";

        display.textContent = "";

        shouldResetDisplay = false;
    }

    if (operator === "") {

        // Prevent duplicate decimal in firstNumber
        if (firstNumber.includes(".")) return;

        if (firstNumber === "") firstNumber = "0";

        firstNumber += ".";

        display.textContent = firstNumber;

    } else {

        shouldResetDisplay = false;

        // Prevent duplicate decimal in secondNumber
        if (secondNumber.includes(".")) return;

        if (secondNumber === "") secondNumber = "0";

        secondNumber += ".";

        display.textContent = secondNumber;
    }

});
