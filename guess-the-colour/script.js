const colorCode = document.getElementById("color-code");
const optionsContainer = document.getElementById("options-container");
let randomColor = null;
let scoreContainer = document.getElementById("score") //rendering initial score
let score = 0;
function incrementScore() {
    score += 1;
}

function validateResult(el) {
    const selectedElement = el.target.style.backgroundColor;
    if (selectedElement === randomColor) {
        incrementScore();
    }
    window.localStorage.setItem("score", score);
    startGame();
}
function generateRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min));
}
function generateRandomColorRGB() {
    const red = generateRandomNumber(0, 235);
    const green = generateRandomNumber(0, 235);
    const blue = generateRandomNumber(0, 235);
    return `rgb(${red}, ${green}, ${blue})`;
}

function startGame() {
    score = Number(window.localStorage.getItem("score")) ?? 0;
    scoreContainer.innerText = score;
    optionsContainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCode.innerText = randomColor;
    const ansIndex = generateRandomNumber(0, 5);
    for (i = 0; i < 6; i++) {
        const div = document.createElement("div");
        div.addEventListener("click", validateResult);
        div.style.background = i == ansIndex ? randomColor : generateRandomColorRGB();
        optionsContainer.append(div);
    }
}

window.addEventListener("load", () => startGame());