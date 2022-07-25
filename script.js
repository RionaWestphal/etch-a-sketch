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
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

makeGrid();