var rows = 5;
var columns = 5;

var currTile;
var otherTile;



window.onload = function() {
    //Initialize the 5x5 board
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            //img
            let tile = document.createElement("img");
            tile.src = "./img/white.png";

            tile.addEventListener("dragstart", dragStart); //Click on image to drag
            tile.addEventListener("dragover", dragOver); //Drag an image
            tile.addEventListener("dragenter", dragEnter); //Dragging an image into another one
            tile.addEventListener("dragleave", dragLeave); // Dragging an image away from another one
            tile.addEventListener("drop", dragDrop); //Drop an image into another one 
            tile.addEventListener("dragend", dragEnd); //After you completed dragDrog
            document.getElementById("board").append(tile);
        }
    }  
    
    //Pieces
    let pieces = [];
    for (let i=1; i <= rows*columns; i++) {
        pieces.push(i.toString()); //Put "1" to 25 into the array (puzzle images names)
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);

        //Swap
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        //console.log(pieces.length);
        let tile = document.createElement("img");
        tile.src = "./img/" + pieces[i] + ".png";

        //Drag Functionality
        tile.addEventListener("dragstart", dragStart); //Click on image to drag
        tile.addEventListener("dragover", dragOver); //Drag an image
        tile.addEventListener("dragenter", dragEnter); //Dragging an image into another one
        tile.addEventListener("dragleave", dragLeave); // Dragging an image away from another one
        tile.addEventListener("drop", dragDrop); //Drop an image into another one 
        tile.addEventListener("dragend", dragEnd); //After you completed dragDrog
        document.getElementById("pieces").append(tile);
    }
}

function dragStart() {
    currTile = this; //This refers to image that was clicked on for dragging    
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {
    
}

function dragDrop() {
    otherTile = this; //This refers to image that is being dropped on      
}

function dragEnd() {
    if (currTile.src.includes("white")) {
        return;
    }
    let currImg = currTile.src;
    let otherImg = otherTile.src;
    currTile.src = otherImg;
    otherTile.src = currImg;

    //turns += 1;
    //document.getElementById("turns").innerText = turns;
}