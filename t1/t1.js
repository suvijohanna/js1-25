'use strict';

const tempC = prompt('Syötä lämpötila celsiuksina');

const tempF = (tempC * 9 / 5) + 32;
const tempK = tempC + 273.15;

const answer = `${tempC} °C on ${tempF} °F ja ${tempK} K.`;

document.getElementById('target').innerHTML = answer;
