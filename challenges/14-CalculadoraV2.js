let suma = numbers => numbers.reduce((a, b)=> a+b);
let multiplicacion = numbers => numbers.reduce((a, b)=> a*b);
let numeros = [];

do{
    numeros.push(parseInt(prompt("Ingresa un numero a sumar o multiplicar")));
}while(prompt('¿Hay mas numeros para sumar? (si/no)').toLowerCase() === "si");

const operacion = prompt('¿Que operacion matematica quieres realizar? Por ahora solo (suma/multiplicación)').toLowerCase();
switch(operacion){
    case 'suma':
        document.write(`La suma de los numeros es <span style="color: #ff0;">${suma(numeros)}</span>`);
        break;
    case 'multiplicacion':
        document.write(`La multiplicación de los numeros es <span style="color: #ff0;">${multiplicacion(numeros)}</span>`)
        break;
    default:
        document.write('<p style="color: #ff00ff;">No puedo procesar esa operación</p>');
}
