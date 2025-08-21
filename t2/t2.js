'use strict';

const x1 = prompt('Anna ekan pisteen X-koordinaatti');
const y1 = prompt('Anna ekan pisteen Y-koordinaatti');

const x2 = prompt('Anna tokan pisteen X-koordinaatti');
const y2 = prompt('Anna tokan pisteen Y-koordinaatti');

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distance);

const answer =  `Pisteiden etäisyys on ${distance}`;

document.querySelector('#target').innerHTML = answer;
