const container = document.querySelector("#container");

const content = document.querySelector("div");

for (let i = 0; i<256; i++) {
  const div = document.createElement("div");
  div.setAttribute("id", "divGrid");
  container.appendChild(div);
}
const divGrid = document.querySelectorAll("#divGrid");

//for each div that the mouse passes over it sets a new class and calls a function to "paint" the divs with new class
divGrid.forEach((div) => {
  div.addEventListener('mousemove', () => {
    div.setAttribute("class", "paintedDiv");
    changebackground(div)
  });
});

function changebackground(e) {
e.style.backgroundColor = "black";
}

  


