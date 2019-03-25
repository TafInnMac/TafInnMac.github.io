var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".colorGenerator");

function printCssGradVal() {
    css.textContent = body.style.background + ";";
    console.log(body.style.background = ";");
}

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    printCssGradVal();
}

function getRandomColor() {
    var length = 6;
    var chars = '0123456789ABCDEF';
    var hex = '#';
    while (length--) hex += chars[Math.floor((Math.random() * chars.length))];
    return hex;
}

function setNewColor() {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    setGradient();
}

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setNewColor);