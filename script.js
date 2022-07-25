const button = document.getElementById("changeGrid");
button.addEventListener("click",promptSize);
const maxWidth = 520;
const maxHeight = 520;
let gridSize = 16;
makeGrid(gridSize);

function makeGrid(gridSize) {
    let container = document.getElementById("grid");
    for(let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        for(let j = 0; j < gridSize; j++) {
            let cell = document.createElement("div");
            cell.style.width = `${maxWidth/gridSize}px`;
            cell.style.height = `${maxHeight/gridSize}px`;
            cell.style.background = "#ffe6fa";
            cell.style.outline='1px solid black';
            cell.addEventListener('mouseenter',changeColor);
            cell.addEventListener('mouseleave',revertColor);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function changeColor(e) {
    e.toElement.style.backgroundColor="#cf7cbe";
}

function revertColor(e) {
    e.fromElement.style.backgroundColor="#ffe6fa";
}

function promptSize(e) {
    gridSize = prompt("Input your desired grid size:");
    if(gridSize <= 100 && gridSize > 0) {
        removeGrid();
        makeGrid(gridSize);
    }
}

function removeGrid()
{
    document.getElementById("grid").innerHTML = "";
}