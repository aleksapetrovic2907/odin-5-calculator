let display;
let digitsContainer;
let operationsContainer;

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
    display = document.querySelector("#display");
    digitsContainer = document.querySelector("#digits-container");
    operationsContainer = document.querySelector("#operations-container");

    digitsContainer.addEventListener("click", (event) => {
        calculator.addDigitToOperand(event.target.id);
        // Update display
    })

    operationsContainer.addEventListener("click", (event) => {
        calculator.selectOperation(event.target.id);
        // Update display
    })
}