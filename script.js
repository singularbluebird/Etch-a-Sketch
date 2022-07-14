let size = 16 * 16;
let minSize = (1/16) * 100;
let divList = [];
const gridHolder = document.querySelector('.gridHolder');

for (i = 0; i < size; i++) {
   divList[i] = document.createElement('div');
   divList[i].classList.add('grid');
   gridHolder.appendChild(divList[i]);
}

const grids = document.querySelectorAll('.grid');

grids.forEach((grid) => {
     grid.style.flex = "1 1 content";
     grid.style.cssText = `min-width :${minSize}%; 
     min-height: ${minSize};`;
});
