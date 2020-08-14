let today = new Date();

const day = prompt('Ingresa tu dia de cumpleaños');
const month = prompt('Ingresa tu mes de cumpleaños');
const year = prompt('Ingresa tu año de cumpleaños');

let birthday = new Date(year, month-1, day);

const tiempo = (birthday - today);
let tiempoSeg = tiempo / 1000;
let tiempoMin = tiempoSeg / 60;
let tiempoHr = tiempoMin / 60;
let tiempoDay = Math.floor(tiempoHr / 24);
document.write(`<h3>Faltan ${tiempoDay} días para tu cumpleaños</h3>`);