const container = document.querySelector("#container");
const content = document.querySelector("div");
const btnEl = document.querySelector("#btn-el");
const btnRandom = document.querySelector("#btn-random")
console.log(btnRandom)
let pixels = 16;

//renders the game
function renderGame() {
  createGrid();
}

//creates the grid by reading the number of squares(pixels), rows and columns
function createGrid() {
  pixelDivs();
  container.style.gridTemplateColumns = `repeat(${pixels}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${pixels}, 1fr)`;
  //set the quantity of squares per side
}

//set the quantity of divs(pixels) and adds event to paint them
function pixelDivs() {
  for (let i = 0; i < pixels * pixels; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "divGrid");
    container.appendChild(div);
    div.addEventListener('mousemove', () => {
      // div.setAttribute("class", "paintedDiv");
      defaultColor(div);
      // // randomColor(div)
    });
  }
}
const divGrid = document.querySelectorAll("#divGrid");

//paints divs black
function defaultColor(div) {
  div.style.backgroundColor = "black";
}
//RGB color WIP
///////////////////////////////////////////////////////////////////////
// btnRandom.addEventListener('click', () => {
//   randomColor(div)
//   // console.log("h")
// });

// function randomColor() {
//   const randomColor = Math.floor(Math.random()*16777215).toString(16);
//   divGrid.style.backgroundColor = "#" + randomColor;
// }
///////////////////////////////////////////////////////////////////////

//first clears canvas, then asks the user for new grid
btnEl.addEventListener('click', () => {
  clearCanvas()
  userInput()
});

//clear the canvas (by making it color white)
function clearCanvas() {
  divGrid.forEach((div) => {
    div.style.backgroundColor = ""
  });
}

//first removes old grid, the get the desired grid size and renders the game with new values
function userInput() {
  removeGrid()
  pixels = window.prompt("Write a number between 10 and 100", 16)
  if (pixels <= 9 || pixels >= 101) {
    alert("Error")
    return userInput()
  } else {
    renderGame()
  }
  
}

//removes old grid
function removeGrid() {
  let squares = container.querySelectorAll("div")
  squares.forEach((div) => div.remove());
}

renderGame()


