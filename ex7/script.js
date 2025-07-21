let display = document.getElementById('display');
let memory = 0;

function append(value) {
  if (display.value === "0") display.value = "";
  display.value += value;
}

function clearAll() {
  display.value = "0";
}

function clearEntry() {
  display.value = "0";
}

function backspace() {
  display.value = display.value.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch (e) {
    display.value = "Error";
  }
}

function sqrt() {
  display.value = Math.sqrt(eval(display.value));
}

function square() {
  display.value = Math.pow(eval(display.value), 2);
}

function toggleSign() {
  if (display.value.charAt(0) === '-') {
    display.value = display.value.slice(1);
  } else {
    display.value = '-' + display.value;
  }
}

function memoryClear() {
  memory = 0;
}

function memoryRecall() {
  display.value = memory;
}

function memoryAdd() {
  memory += eval(display.value);
}

function memorySubtract() {
  memory -= eval(display.value);
}

function memoryStore() {
  memory = eval(display.value);
}
