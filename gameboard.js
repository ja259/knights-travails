 
// Create the chess board module
const gameBoard = () => {

    // Instantiate variables and create chessboard table
    const defaultStartLocation = [0,0];
    const coordArray = [];
    const chessTable = document.createElement("table");
    
    // Create the board cells and apply position values to each cell
    chessTable.setAttribute("class", "center");
    for (let i = 0; i < 8; i++) {
        const tableRow = document.createElement("tr");
        let cellRowCoord = Math.abs(i - 7);
        tableRow.textContent = cellRowCoord;  //TODO: REMOVE WHEN DONE
        for (let z = 0; z < 8; z++) {
            const tableCell = document.createElement("td");
            let cellColumnCoord = z;
            tableCell.textContent = cellColumnCoord;   //TODO: REMOVE WHEN DONE
            
            // Loop through to shade odd valued cells
            if ((i + z) % 2 == 0) {
                tableCell.setAttribute("class", "cell whitecell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord)
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            } else {
                tableCell.setAttribute("class", "cell blackcell");
                tableRow.appendChild(tableCell);
                coordArray.push(cellRowCoord)
                coordArray.push(cellColumnCoord);
                tableCell.dataset.coordArray = coordArray;
                coordArray.splice(0, 2);
            }
        }
    chessTable.appendChild(tableRow);   
    }

    // Create Knight and place him at position 0,0
    const cellNodes = chessTable.querySelectorAll("td");
    cellNodes.forEach((cellNode) => {
        if (defaultStartLocation.toString() === cellNode.dataset.coordArray) {
            let knightImg = document.createElement("img");
            knightImg.src = "./image/chess-knight.png";
            cellNode.appendChild(knightImg);
        }
    });
    
    document.body.appendChild(chessTable);
};

const resetBoard = (function () {
    const resetButton = document.querySelector(".clear-board-button");
    resetButton.addEventListener("click", function () {
        location.reload();
    });
})();

export { gameBoard };