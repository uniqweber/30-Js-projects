const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");

const operators = ["+", "-", "*", "/"];

const initializeDisplay = () => (display.innerText = "0");
const clearDisplay = () => (display.innerText = "0");
const getLastCharacter = () => display.innerText[display.innerText.length - 1];

const deleteLastCharacter = () =>
  (display.innerText = display.innerText.slice(0, -1) || "0");

function calculateResult() {
  const lastChar = getLastCharacter();
  if (!operators.includes(lastChar)) {
    try {
      let result = eval(display.innerText);
      if (result.toString().length > 12) {
        result = Number(result).toExponential(6);
      }
      display.innerText = result;
    } catch {
      display.innerText = "Error";
      setTimeout(() => clearDisplay(), 300);
    }
  }
}

function canAddOperator(currentValue, value) {
  return !(currentValue === "0" && operators.includes(value));
}

function handleOperator(currentValue, value) {
  const lastChar = getLastCharacter();
  return operators.includes(lastChar) && operators.includes(value)
    ? ((display.innerText = currentValue.slice(0, -1) + value), true)
    : false;
}

function handleDigitInput(currentValue, value) {
  if (currentValue.length >= 12 && !operators.includes(value)) return;
  if (currentValue === "0" && !operators.includes(value)) {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function handleButtonClick(value) {
  const currentValue = display.innerText;
  switch (value) {
    case "C":
      clearDisplay();
      break;
    case "D":
      deleteLastCharacter();
      break;
    case "=":
      calculateResult();
      break;
    default:
      if (!canAddOperator(currentValue, value)) return;
      if (!handleOperator(currentValue, value)) {
        handleDigitInput(currentValue, value);
      }
      break;
  }
}

initializeDisplay();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleButtonClick(e.target.value);
  });
});
