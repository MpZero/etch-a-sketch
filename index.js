const container = document.querySelector("#container");
const content = document.querySelector("div");
const btnEl = document.querySelector("#btn-el");
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
      changebackground(div);
    });
  }
}
const divGrid = document.querySelectorAll("#divGrid");

//paints divs black
function changebackground(div) {
  div.style.backgroundColor = "black";
}

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


