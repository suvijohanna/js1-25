'use strict';

const points = prompt('Syötä kurssista saamasi pisteet');

let grade = '';

if (points >= 0 && points <= 39) {
  grade = '0';
} else if (points >= 40 && points <= 51) {
  grade = '1';
} else if (points >= 52 && points <= 63) {
  grade = '2';
} else if (points >= 64 && points <= 75) {
  grade = '3';
} else if (points >= 76 && points <= 87) {
  grade = '4';
} else if (points >= 88 && points <= 100) {
  grade = '5';
} else {
  grade = 'selvitettävä opettajan kanssa.';
}

const answer =  `Kurssiarvosanasi on ${grade}`;

document.querySelector('#target').innerHTML = answer;
