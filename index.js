const container = document.querySelector("#container");
const content = document.querySelector("div");
const btnEl = document.querySelector("#btn-el");

for (let i = 0; i<256; i++) {
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
    // let result = window.prompt()
    // for (let i = 0; i<result; i++) {
    //   const div = document.createElement("div");
    //   div.setAttribute("id", "divGrid");
    //   container.appendChild(div);
    }
  // }
  function removeDiv () {
    let eliminar = document.querySelectorAll("#divGrid");
    container.removeChild(eliminar)
  }
  
//maybe delete all divs before creating a new canvas
//Maybe toggle paintedDiv class off later
//userinput() for loop maybe

