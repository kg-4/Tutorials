let display = document.getElementById('display');
let currentExpression = '';

function appendToDisplay(value) {
  currentExpression += value;
  display.value = currentExpression;
}

function clearDisplay() {
  currentExpression = '';
  display.value = '';
}

function calculate() {
  try {
    currentExpression = eval(currentExpression).toString();
    display.value = currentExpression;
  } catch (error) {
    display.value = 'Error';
  }
}