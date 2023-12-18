let evaluated = false;
let decimalPressed = false;
let percentagePressed = 0;

let displayValue = document.getElementById("display-value");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");
let percentage = document.getElementById("percentage");
let decimal = document.getElementById("decimal");

window.onload = () => {
  displayValue.value = "";
};

const inputBtns = Array.from(document.querySelectorAll(".input-button"));

inputBtns.forEach((inputBtn) => {
  inputBtn.addEventListener("click", () => {
    let dis_val = displayValue.value;
    const buttonValue = inputBtn.value;

    if (buttonValue === "=") {
      dis_val = deciEstimate(eval(dis_val));
      displayValue.value = dis_val;
      evaluated = true;
      decimalPressed = false;
    } else {
      dis_val += buttonValue;
      if (evaluated && !isNaN(buttonValue)) {
        dis_val = buttonValue;
        evaluated = false;
      }
      displayValue.value = dis_val;
    }
  });
});

decimal.addEventListener("click", () => {
  if (!decimalPressed) {
    displayValue.value += ".";
    decimalPressed = true;
  } else {
    displayError("Invalid Input");
  }
});

function displayError(message) {
  displayValue.value = message;
}

function deciEstimate(value) {
  return +value.toFixed(6);
}

percentage.addEventListener("click", () => {
  let screenValue = displayValue.value;
  let result = parseFloat(screenValue) / 100;
  percentagePressed = result;
  displayValue.value = result;
  decimalPressed = false;
});

clear.addEventListener("click", () => {
  displayValue.value = "";
  decimalPressed = false;
});

erase.addEventListener("click", () => {
  displayValue.value = displayValue.value.slice(0, -1);
});
