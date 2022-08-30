ballElement = document.getElementById("ball");
ballElement.style.backgroundColor = "yellow";

const moveRight = function () {
    let left = parseInt(ballElement.style.left) || 0;
    if (left + 15 <= 410) {
        left += 15;
        ballElement.style.left = `${left}px`;
    }
};
const moveLeft = function () {
    let left = parseInt(ballElement.style.left) || 0;
    if (left - 15 >= 0) {
        left -= 15;
        ballElement.style.left = `${left}px`;
    }
};
const moveUp = function () {
    let top = parseInt(ballElement.style.top) || 0;
    if (top - 15 >= 0) {
        top -= 15;
        ballElement.style.top = `${top}px`;
    }
};
const moveDown = function () {
    let top = parseInt(ballElement.style.top) || 0;
    if (top + 15 <= 410) {
        top += 15;
        ballElement.style.top = `${top}px`;
    }
};

const header = document.createElement("h1");
header.innerHTML = "The Best Game Ever";
header.style.color = "#c0392b";
header.style.fontFamily = "Helvetica";
header.setAttribute("class", "my-header");
document.body.appendChild(header);

const subHeader = document.createElement("h2");
subHeader.innerHTML = "Game by: ~Itay Talias~";
subHeader.setAttribute("class", "sub-header");
document.body.appendChild(subHeader);
