/* ¿Recuerdas tus clases de Geometría?

Es momento de poner ese conocimiento a la práctica. El área de un triángulo se describe de la siguiente manera: A = (b * h) / 2 .

El reto del día de hoy es escribir un programa que tome la base y la altura como parámetros y calcule el área del triángulo. Bonus: El programa debe determinar si el triángulo es isósceles, equilátero o escaleno. */


let base = parseInt(prompt('Ingresa la base del triangulo', 0));
let altura = parseInt(prompt('Ingresa la altura del triangulo', 0));

let resultado = (base * altura)/2;

document.write('El area del triangulo es: ' + resultado + '</br>');

//Determinar el tipo de triangulo

let ladoA = parseInt(prompt('Ingresa un lado del triangulo', 0));
let ladoB = parseInt(prompt('Ingresa otro lado del triangulo', 0));
let ladoC = parseInt(prompt('Ingresa otro lado del triangulo', 0));

//Triangulo
document.write('<br/> Lados del triangulo: ' + ladoA +' cm' + ' ' + ladoB +' cm' + ' ' + ladoC+' cm');
if(ladoA == ladoB && ladoA == ladoC){
    document.write('<br/>Es un triangulo equilatero porque todos sus lados son iguales')
}else if(ladoA == ladoB || ladoA == ladoC){
    document.write('<br/>Es un triangulo isosceles porque tiene dos lados iguales');
}else{
    document.write('<br/>Es un triangulo escaleno porque no tiene ningun lado igual');
}