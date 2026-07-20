// ==============================
// Calculator
// ==============================

console.log("Calculator Loaded");

// Select elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

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
      console.log("Operator Button");
      return;
    }

    // ==============================
    // Equals Button
    // ==============================
    if (button.classList.contains("equals")) {
      console.log("Equals Button");
      return;
    }

    // ==============================
    // Number Buttons
    // ==============================
    if (display.value === "0") {
      display.value = value;
    } else {
      display.value += value;
    }

    console.log("Number Button");
  });
});