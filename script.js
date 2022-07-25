function makeGrid() {
    let container = document.getElementById("grid");
    for(let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        for(let j = 0; j < 16; j++) {
            let cell = document.createElement("div");
            cell.style.width = "40px";
            cell.style.height = "40px";
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
    console.log(e);
}

makeGrid();