// console.log("This is my Calculator");


let display = document.getElementById("display");

function append(value) {
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = "0";
}

function backspace() {
    if (display.innerText.length === 1) {
        display.innerText = "0";
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        let expression = display.innerText
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        let result = Function('"use strict";return (' + expression + ')')();
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
}


/* Keyboard Support */

document.addEventListener("keydown", function(e) {
    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        append(e.key);
    } 
    else if (e.key === "Enter") {
        calculate();
    } 
    else if (e.key === "Backspace") {
        backspace();
    } 
    else if (e.key === "Escape") {
        clearDisplay();
    }
});