let size = 16 * 16;
let divList = [];
const gridHolder = document.querySelector('.gridHolder');

for (i = 0; i < size; i++) {
   divList[i] = document.createElement('div');
   divList[i].classList.add('grid');
   gridHolder.appendChild(divList[i]);
}

const grids = document.querySelector('.grid');