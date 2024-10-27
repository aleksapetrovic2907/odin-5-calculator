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
        // Tell calculator that an operation has been selected
        // Update display
    })
}