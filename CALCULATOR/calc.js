
let currentResult = '0';

function clearResult() {
    currentResult = '0';
    updateDisplay();
}

function appendToResult(value) {
    if (currentResult === '0') {
        currentResult = value;
    } else {
        currentResult += value;
    }
    updateDisplay();
}

function calculateResult() {
    try {
        currentResult = eval(currentResult).toString();
    } catch (error) {
        currentResult = 'Error';
    }
    updateDisplay();
}
function backspace() {
    currentResult = currentResult.slice(0, -1);
    updateDisplay();
}


function updateDisplay() {
    document.getElementById('result').textContent = currentResult;
}
