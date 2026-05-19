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

    if (b === 0) {
        return "Error";
    }

    return a / b;
}


let firstNumber = "";
let operator = "";
let secondNumber = "";
let shouldResetDisplay = false;


const display = document.querySelector("#display");

const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector("#equals");

const clearButton = document.querySelector("#clear");

const backspaceButton = document.querySelector("#backspace");


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


function calculate() {

    const result = operate(
        operator,
        Number(firstNumber),
        Number(secondNumber)
    );

    if (result === "Error") {

        display.textContent = result;

        firstNumber = "";
        secondNumber = "";
        operator = "";

        return;
    }

    const roundedResult = Math.round(result * 1000) / 1000;

    display.textContent = roundedResult;

    firstNumber = roundedResult.toString();

    secondNumber = "";

    shouldResetDisplay = true;
}


numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (shouldResetDisplay === true) {

            display.textContent = "";

            firstNumber = "";

            shouldResetDisplay = false;
        }

        if (operator === "") {

            firstNumber += button.textContent;

            display.textContent = firstNumber;
        }

        else {

            secondNumber += button.textContent;

            display.textContent = secondNumber;
        }

    });

});


operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (firstNumber === "") {
            return;
        }

        if (secondNumber !== "") {
            calculate();
        }

        operator = button.textContent;

        shouldResetDisplay = false;

    });

});


equalsButton.addEventListener("click", () => {

    if (
        firstNumber !== "" &&
        operator !== "" &&
        secondNumber !== ""
    ) {

        calculate();

        operator = "";

    }

});


clearButton.addEventListener("click", () => {

    firstNumber = "";
    secondNumber = "";
    operator = "";

    shouldResetDisplay = false;

    display.textContent = "0";

});


backspaceButton.addEventListener("click", () => {

    if (secondNumber !== "") {

        secondNumber = secondNumber.slice(0, -1);

        display.textContent = secondNumber || "0";
    }

    else if (operator === "") {

        firstNumber = firstNumber.slice(0, -1);

        display.textContent = firstNumber || "0";
    }

});


document.addEventListener("keydown", (event) => {

    const key = event.key;

    if (key >= 0 && key <= 9) {

        numberButtons.forEach((button) => {

            if (button.textContent === key) {
                button.click();
            }

        });

    }

    if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/"
    ) {

        operatorButtons.forEach((button) => {

            if (button.textContent === key) {
                button.click();
            }

        });

    }

    if (key === "Enter" || key === "=") {
        equalsButton.click();
    }

    if (key === "Backspace") {
        backspaceButton.click();
    }

    if (key === "Escape") {
        clearButton.click();
    }

});