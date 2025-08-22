'use strict';

const integ = +prompt('Syötä positiivinen kokonaisluku');

let sum = 0;

for (let i = integ; i >= 1 ; i--) {
  sum += i;
}

document.querySelector('#target').innerText = `Luonnollisten lukujen summa on ${sum}`;
