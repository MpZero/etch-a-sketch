const container = document.querySelector("#container");
const content = document.querySelector("div");
const btnEl = document.querySelector("#btn-el");
let gridSize = 16
// let rowSize =
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
//set the quantity of squares per side

//set the quantity of pixels
let pixels = 256
for (let i = 0; i < pixels; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", "divGrid");
  container.appendChild(div);
}
const divGrid = document.querySelectorAll("#divGrid");


//for each div that the mouse passes over it sets a new class and calls a function to "paint" the divs with new class
divGrid.forEach((div) => {
  div.addEventListener('mousemove', () => {
    // div.setAttribute("class", "paintedDiv");
    changebackground(div);
  });
});

function changebackground(div) {
  div.style.backgroundColor = "black";
}


btnEl.addEventListener('click', () => {
  clearCanvas()
  userInput()
});

//clear the canvas 
function clearCanvas() {
  divGrid.forEach((div) => {
    div.style.backgroundColor = ""
  });
}

//get the desired grid size
function userInput() {
  removeDiv()
  gridSize = window.prompt("Write a number between 10 and 100", 16)

}
// for (let i = 0; i<result; i++) {
//   const div = document.createElement("div");
//   div.setAttribute("id", "divGrid");
//   container.appendChild(div);
//     }
//   // }
//removes old grid
function removeDiv() {
  
  let eliminar = document.getElementById("#divGrid");
  // container.removeNode

  ///use .remove  maybe
  // container.removeChild(eliminar)
  // container.remove(eliminar)
}

//maybe delete all divs before creating a new canvas
//Maybe toggle paintedDiv class off later
//userinput() for loop maybe

