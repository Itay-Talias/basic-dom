console.log(document);
const playingField = document.getElementById("playing-field");
console.log(playingField.innerHTML);
const down = document.getElementById("down");
document.getElementById("ball").style.backgroundColor = "yellow";
console.log(down);

const moveRight = function () {
    let left = parseInt(document.getElementById("ball").style.left) || 0;
    if (left + 15 <= 410) {
        left += 15;
        document.getElementById("ball").style.left = `${left}px`;
    }
};
const moveLeft = function () {
    let left = parseInt(document.getElementById("ball").style.left) || 0;
    if (left - 15 >= 0) {
        left -= 15;
        document.getElementById("ball").style.left = `${left}px`;
    }
};
const moveUp = function () {
    let top = parseInt(document.getElementById("ball").style.top) || 0;
    if (top - 15 >= 0) {
        top -= 15;
        document.getElementById("ball").style.top = `${top}px`;
    }
};
const moveDown = function () {
    let top = parseInt(document.getElementById("ball").style.top) || 0;
    if (top + 15 <= 410) {
        top += 15;
        document.getElementById("ball").style.top = `${top}px`;
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

document.addEventListener("keydown", moveDown);
document.addEventListener("keyup", moveUp);
