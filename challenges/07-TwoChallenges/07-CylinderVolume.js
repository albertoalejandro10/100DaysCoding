/*
Las matemáticas son base fundamental de la lógica y programación, por eso es importante practicarlas constantemente. Un cilindro es un cuerpo geométrico que requiere de varias fórmulas, aplícalas en un programa que reciba datos como su altura y radio de las bases para mostrar el resultado acotado a un decimal.
*/

let radio = parseFloat(prompt('Ingresa el radio del cilindro', 0));
let altura = parseFloat(prompt('Ingresa la altura del cilindro', 0));

function CylinderVolume(radio, altura){
    let base = radio;
    let exponent = 2;
    let resultado = (Math.PI * (base**exponent) * altura);
    document.write(`El volumen es: ${resultado.toFixed(1)}`)
}

CylinderVolume(radio, altura);
