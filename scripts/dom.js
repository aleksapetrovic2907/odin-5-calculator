let display;
let digitsContainer;
let operationsContainer;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    display = document.querySelector("#display");
    digitsContainer = document.querySelector("#digits-container");
    operationsContainer = document.querySelector("#operations-container");

    digitsContainer.addEventListener("click", (event) => {
        if (event.target !== digitsContainer) {
            calculator.addDigitToOperand(event.target.id);
            updateDisplay();
        }
    })

    operationsContainer.addEventListener("click", (event) => {
        if (event.target !== operationsContainer) {
            calculator.selectOperation(event.target.id);
            updateDisplay();
        }
    })
}

function updateDisplay() {
    let targetOp = calculator.op2.length > 0 ? "op2" : "op1";
    display.textContent = calculator[targetOp];
}