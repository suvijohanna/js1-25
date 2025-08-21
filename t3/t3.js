'use strict';

const s1 = prompt('Anna kolmion sivun 1 pituus');
const s2 = prompt('Anna kolmion sivun 2 pituus');
const s3 = prompt('Anna kolmion sivun 3 pituus');

let type = '';

if (s1 === s2 && s2 === s3) {
  type = 'tasasivuinen kolmio';
} else if (s1 === s2 || s1 === s3 || s2 === s3) {
  type = 'tasakylkinen kolmio';
} else {
  type = 'epäsäännöllinen kolmio';
}

document.getElementById('target').insertAdjacentHTML('beforeend', type);
