// ===== Basic math functions =====
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
    if (b === 0) return "Nice try. No ÷ by 0 😏";
    return a / b;
}

function operate(a, operator, b) {
    switch (operator) {
        case "+": return add(a, b);
        case "-": return sub(a, b);
        case "*": return mul(a, b);
        case "/": return div(a, b);
        default: return null;
    }
}

function roundResult(num) {
    return Math.round(num * 100000) / 100000;
}

// ===== State =====
let num1 = null;
let operator = null;
let shouldResetDisplay = false;

// ===== DOM =====
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const decimal = document.querySelector(".decimal");

// ===== Digit buttons =====
digits.forEach(digit => {
    digit.addEventListener("click", () => {
        if (shouldResetDisplay) {
            display.value = "";
            shouldResetDisplay = false;
        }
        display.value += digit.textContent;
        updateDecimalState();
    });
});

// ===== Decimal button =====
decimal.addEventListener("click", () => {
    if (shouldResetDisplay) {
        display.value = "0";
        shouldResetDisplay = false;
    }

    const currentNumber = getCurrentNumber();
    if (currentNumber.includes(".")) return;

    if (display.value === "" || endsWithOperator()) {
        display.value += "0.";
    } else {
        display.value += ".";
    }

    updateDecimalState();
});

// ===== Operator buttons =====
operators.forEach(op => {
    op.addEventListener("click", () => {
        if (display.value === "") return;

        if (endsWithOperator()) {
            // replace operator
            display.value = display.value.slice(0, -1) + op.textContent;
            operator = op.textContent;
            return;
        }

        if (num1 !== null && operator !== null) {
            const parts = display.value.split(operator);
            const num2 = Number(parts[1]);

            let result = operate(num1, operator, num2);
            if (typeof result === "string") {
                display.value = result;
                resetCalculator();
                return;
            }

            result = roundResult(result);
            num1 = result;
            display.value = result + op.textContent;
        } else {
            num1 = Number(display.value);
            display.value += op.textContent;
        }

        operator = op.textContent;
        shouldResetDisplay = false;
        updateDecimalState();
    });
});

// ===== Equals =====
equals.addEventListener("click", () => {
    if (!operator || endsWithOperator()) return;

    const parts = display.value.split(operator);
    const num2 = Number(parts[1]);

    let result = operate(num1, operator, num2);
    if (typeof result === "string") {
        display.value = result;
        resetCalculator();
        return;
    }

    result = roundResult(result);
    display.value = result;

    num1 = result;
    operator = null;
    shouldResetDisplay = true;
    updateDecimalState();
});

// ===== Clear =====
clear.addEventListener("click", resetCalculator);

// ===== Helpers =====
function resetCalculator() {
    num1 = null;
    operator = null;
    display.value = "";
    shouldResetDisplay = false;
    updateDecimalState();
}

function endsWithOperator() {
    return ["+", "-", "*", "/"].includes(display.value.slice(-1));
}

function getCurrentNumber() {
    if (!operator) return display.value;
    return display.value.split(operator)[1] || "";
}

function updateDecimalState() {
    const currentNumber = getCurrentNumber();
    decimal.disabled = currentNumber.includes(".");
}
