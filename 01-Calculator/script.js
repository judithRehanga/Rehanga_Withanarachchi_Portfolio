// ==============================
// Calculator
// ==============================

// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Calculator state
let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldResetDisplay = false;

function clearCalculator() {
  display.value = "0";

  firstNumber = "";
  secondNumber = "";
  currentOperator = "";
  shouldResetDisplay = false;
}

function deleteLastCharacter() {
  display.value = display.value.slice(0, -1);

  if (display.value === "") {
    display.value = "0";
  }
}

function calculate() {
  secondNumber = display.value;

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
      if (num2 === 0) {
        display.value = "Error";

        firstNumber = "";
        secondNumber = "";
        currentOperator = "";
        shouldResetDisplay = true;

        return;
      }

      result = num1 / num2;
      break;

    case "%":
      result = num1 % num2;
      break;
  }

  display.value = result.toString();

  if (isNaN(result)) {
    display.value = "Error";

    return;
  }

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
        clearCalculator();
      }

      if (value === "⌫") {
        deleteLastCharacter();
      }

      return;
    }

    // ==============================
    // Operator Buttons
    // ==============================
    if (button.classList.contains("operator")) {
      if (display.value === "0" && firstNumber === "") {
        return;
      }

      if (currentOperator !== "" && !shouldResetDisplay) {
        calculate();
      }

      firstNumber = display.value;
      currentOperator = value;
      shouldResetDisplay = true;

      return;
    }

    // ==============================
    // Equals Button
    // ==============================
    if (button.classList.contains("equals")) {
      if (firstNumber === "" || currentOperator === "") {
        return;
      }

      calculate();

      return;
    }

    if (value === "." && display.value.includes(".")) {
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
  });
});
