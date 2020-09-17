// #Day - 4 Color Picker

const body = document.querySelector("body");
const input = document.getElementById("picker");
const colorCode = document.getElementById("color-code");

// function call
fnColor();
input.addEventListener("input", fnColor);

function fnColor() {
    body.style.backgroundColor = input.value;
    colorCode.innerHTML = input.value;
    colorCode.style.color = input.value;
}