// ==============================
// Calculator
// ==============================

console.log("Calculator Loaded");

// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Calculator state
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldResetDisplay = false;

function calculate() {

    secondNumber = display.value;

    console.log(firstNumber);
    console.log(currentOperator);
    console.log(secondNumber);

    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    let result = 0;

    switch (currentOperator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "×":
            result = num1 * num2;
            break;

        case "÷":
            result = num1 / num2;
            break;

        case "%":
            result = num1 % num2;
            break;
    }

    display.value = result;

    firstNumber = result.toString();

    currentOperator = "";

    shouldResetDisplay = true;

}

// Loop through every button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    // ==============================
    // Function Buttons
    // ==============================
    if (button.classList.contains("function")) {
      if (value === "AC") {
        display.value = "0";
      }

      console.log("Function Button");
      return;
    }

    // ==============================
    // Operator Buttons
    // ==============================
    if (button.classList.contains("operator")) {
      firstNumber = display.value;
      currentOperator = value;
      shouldResetDisplay = true;

      console.log("First Number:", firstNumber);
      console.log("Operator:", currentOperator);

      return;
    }

    // ==============================
    // Equals Button
    // ==============================
    if (button.classList.contains("equals")) {

    calculate();

    return;

}

    // ==============================
    // Number Buttons
    // ==============================
    if (shouldResetDisplay) {
      display.value = value;
      shouldResetDisplay = false;
    } else if (display.value === "0") {
      display.value = value;
    } else {
      display.value += value;
    }

    console.log("Number Button");
  });
});
