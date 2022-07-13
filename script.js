let size = 16 * 16;
let divList = [];
let gridHolder = document.querySelector('.gridHolder');

for (i = 0; i < size; i++) {
   divList[i] = document.createElement('div');
   gridHolder.appendChild(divList[i]);
}