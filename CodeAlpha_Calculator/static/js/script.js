// variables to store calculator state
var currentInput = "0";
var prevInput = "";
var operator = "";
var justCalculated = false;

var display = document.getElementById("display");
var history = document.getElementById("history");

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNum(num) {
  if (justCalculated) {
    currentInput = num;
    justCalculated = false;
  } else {
    if (currentInput === "0") {
      currentInput = num;
    } else {
      if (currentInput.length < 10) {
        currentInput += num;
      }
    }
  }
  updateDisplay();
}

function addDot() {
  if (justCalculated) {
    currentInput = "0.";
    justCalculated = false;
    updateDisplay();
    return;
  }
  // only add dot if there isnt one already
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function setOperator(op) {
  // if user already typed something and picked operator before pressing =
  if (operator !== "" && !justCalculated) {
    calculate();
  }
  prevInput = currentInput;
  operator = op;
  justCalculated = false;

  // show what operator was selected in history
  var opSymbol = op === "/" ? "÷" : op === "*" ? "×" : op === "-" ? "−" : op;
  history.textContent = prevInput + " " + opSymbol;

  currentInput = "0";
}

function calculate() {
  if (operator === "" || prevInput === "") return;

  var a = parseFloat(prevInput);
  var b = parseFloat(currentInput);
  var result = 0;

  if (operator === "+") result = a + b;
  else if (operator === "-") result = a - b;
  else if (operator === "*") result = a * b;
  else if (operator === "/") {
    if (b === 0) {
      display.textContent = "Error";
      history.textContent = "";
      operator = "";
      prevInput = "";
      currentInput = "0";
      return;
    }
    result = a / b;
  }

  // show full expression in history
  var opSymbol = operator === "/" ? "÷" : operator === "*" ? "×" : operator === "-" ? "−" : operator;
  history.textContent = prevInput + " " + opSymbol + " " + currentInput + " =";

  // round to avoid floating point weirdness like 0.1+0.2
  result = parseFloat(result.toPrecision(10));
  currentInput = String(result);
  operator = "";
  prevInput = "";
  justCalculated = true;
  updateDisplay();
}

function clearAll() {
  currentInput = "0";
  prevInput = "";
  operator = "";
  justCalculated = false;
  history.textContent = "";
  updateDisplay();
}

function toggleSign() {
  if (currentInput !== "0") {
    if (currentInput.startsWith("-")) {
      currentInput = currentInput.slice(1);
    } else {
      currentInput = "-" + currentInput;
    }
    updateDisplay();
  }
}

function percent() {
  var val = parseFloat(currentInput);
  currentInput = String(val / 100);
  updateDisplay();
}

// keyboard support
document.addEventListener("keydown", function(e) {
  if (e.key >= "0" && e.key <= "9") appendNum(e.key);
  else if (e.key === ".") addDot();
  else if (e.key === "+") setOperator("+");
  else if (e.key === "-") setOperator("-");
  else if (e.key === "*") setOperator("*");
  else if (e.key === "/") { e.preventDefault(); setOperator("/"); }
  else if (e.key === "Enter" || e.key === "=") calculate();
  else if (e.key === "Escape") clearAll();
  else if (e.key === "Backspace") {
    if (currentInput.length > 1) {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput = "0";
    }
    updateDisplay();
  }
});
