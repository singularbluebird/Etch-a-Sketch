let size = 16 * 16;
let divList = [];
let gridHolder = document.querySelector('.gridHolder');

for (i = 0; i < size; i++) {
   divList[i] = document.createElement('div');
   divList[i].classList.add('grid');
   gridHolder.appendChild(divList[i]);
}

const grid = document.querySelector('.grid');