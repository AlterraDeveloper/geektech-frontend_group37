function createCell() {
    const div = document.createElement("div");
    div.className = "cell";
    return div;
}

const container = document.querySelector(".container");

const CellCount = 513;

for (let i = 0; i < CellCount; i++) {
    const cell = createCell();
    container.append(cell);
}


function getRandomColor() {
    const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"]
    const randomIndex = Math.floor(Math.random() * colors.length) - 1;
    return colors[randomIndex];
}

const isCell = function (element){
    return element.className === "cell";
}

const onCellHandler = function (event) {

    const element = event.target;
    if(!isCell(element)) return;
    element.style.backgroundColor = getRandomColor();
}

const offCellHandler = function (event) {
    const element = event.target;
    if(!isCell(element)) return;
    event.target.style.backgroundColor = "#1d1d1d";
}


const cells = container.querySelectorAll(".cell");
for (const cell of cells) {
    cell.addEventListener("mouseenter", onCellHandler);
    cell.onmouseleave = offCellHandler;
}
