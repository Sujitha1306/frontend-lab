let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace(/mod/g, '%'));
  } catch {
    display.value = "Error";
  }
}
function clearDisplay() {
  display.value = "";
}

function sqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = "Error";
  }
}
