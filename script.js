let size;
let minSize;
changeGrid(16);
let divList = [];
const gridHolder = document.querySelector(".gridHolder");
const gridResolution = document.querySelector(".gridResolution");

function makeGrid(size) {
   for (i = 0; i < size; i++) {
      divList[i] = document.createElement("div");
      divList[i].classList.add("grid");
      gridHolder.appendChild(divList[i]);
   }
}

makeGrid(size);

let grids = document.querySelectorAll(".grid");

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
   
   if (choice > 100) {
      choice = 0;
      alert("Error, you can't choose a number higher than 100.");
      return choice;
   }
   return choice;
}

function changeGrid(num) {
   size = num**2;
   minSize = (1/num) * 100;
}

function removeGrid() {
   grids.forEach((grid) => {
      gridHolder.removeChild(grid);
   });
}

gridResolution.addEventListener("click", () => {
   removeGrid();
   changeGrid(pickResolution());
   makeGrid(size);

   grids = document.querySelectorAll(".grid");

   grids.forEach((grid) => {
        grid.style.flex = "1 1 content";
        grid.style.cssText = `min-width: ${minSize}%; border: 1px solid black;`;
        grid.addEventListener("mouseover", () => {
         grid.classList.add("hovered");
        });
   });
});