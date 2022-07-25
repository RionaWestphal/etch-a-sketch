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
            cell.style.background = "gray";
            cell.style.borderStyle = "solid";
            cell.style.borderColor = "black";
            cell.style.borderWidth = "1px";
            cell.addEventListener('mouseenter',changeColor);
            cell.addEventListener('mouseleave',revertColor);
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

function changeColor(e) {
    e.toElement.style.backgroundColor="pink";
}

function revertColor(e) {
    e.fromElement.style.backgroundColor="gray";
}

function promptSize(e) {
    gridSize = prompt("Input your desired grid size:");
    if(gridSize <= 100) {
        removeGrid();
        makeGrid(gridSize);
    }
}

function removeGrid()
{
    document.getElementById("grid").innerHTML = "";
}