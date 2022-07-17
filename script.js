let size;
let minSize;
changeGrid(16);
let divList = [];
const gridHolder = document.querySelector(".gridHolder");
const gridResolution = document.querySelector(".gridResolution");

for (i = 0; i < size; i++) {
   divList[i] = document.createElement("div");
   divList[i].classList.add("grid");
   gridHolder.appendChild(divList[i]);
}

const grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
     grid.style.flex = "1 1 content";
     grid.style.cssText = `min-width: ${minSize}%; border: 1px solid black;`;
     grid.addEventListener("mouseover", () => {
      grid.classList.add("hovered");
     });
});

function pickResolution() {
   let choice = prompt("How many squares would you like in your grid?");
   choice = parseInt(choice);
   return choice;
}

function changeGrid(num) {
   size = num**2;
   minSize = (1/num) * 100;
}