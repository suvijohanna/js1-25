'use strict';

const integ = prompt('Syötä positiivinen kokonaisluku');

let sum = 0;

for (let i = 1; i <= integ ; i++) {
  sum += i;
}

document.querySelector('#target').innerHTML = sum;
