let size;
let minSize;

let randomR;
let randomG;
let randomB;

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

function randomRGB() {
   randomR = Math.random() * 256;
   randomG = Math.random() * 256;
   randomB = Math.random() * 256;

   return `rgb(${randomR},${randomG},${randomB})`;
}

function darkenRGB(rgb) {

   let values = rgb.slice(4, -1);
   let listRGB = values.split(",");

   let R = parseFloat(listRGB[0]);
   let G = parseFloat(listRGB[1]);
   let B = parseFloat(listRGB[2]);

   let not1R = 0.1 * R;
   let not1G = 0.1 * G;
   let not1B = 0.1 * B;

   return `rgb(${R - not1R}, ${G - not1G}, ${B - not1B})`;

}

makeGrid(size);

let grids = document.querySelectorAll(".grid");

grids.forEach((grid) => {
     grid.style.flex = "1 1 content";
     grid.style.cssText = `min-width: ${minSize}%; border: 1px solid black;`;
     grid.addEventListener("mouseover", () => {
         grid.style["background-color"] = "rgb(0,0,0)";

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
         grid.style["background-color"] = "rgb(0,0,0)"
        });
   });
});