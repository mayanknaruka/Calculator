function add(a,b) {
    return a + b 
}

function subtract(a, b) {
  return a - b;
}

function  mulitply(a , b) {
    return a * b
}

function divide(a,b) {
    return a/b 
}

let firstNumber = ""

let operator = ""

let secondNumber = ""

function operate (firstNumber, operator, secondNumber) {
    
    if (operator === "+") {
        return add(firstNumber, secondNumber)
    }

    else if (operator === "-"){
        return subtract(firstNumber, secondNumber)

    }
    else if(operator === "*"){
        return mulitply(firstNumber, secondNumber)
    }

    else if(operator === "/"){
        return divide(firstNumber, secondNumber)
    }
}

