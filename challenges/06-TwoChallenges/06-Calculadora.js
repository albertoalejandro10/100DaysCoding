/* ¿Necesitamos nuestra Casio cuando tenemos Python? Yo la verdad todavía amo a mi calculadora de bolsillo, pero también amo hacer programas.El reto del día de hoy es crear una calculadora básica que reemplace a nuestra Casio. Crea un programa que tome un número, un operador, y otro número y realice el cálculo correcto.Ejemplo:```
calculadora(2, “+”, 2) -> 4
calculadora(4, “/”, 2) -> 2 */

let valor1 = parseInt(prompt('Ingresar primer valor', 0));
let valor2 = parseInt(prompt('Ingresar segundo valor', 0));
let operador = prompt('Ingresar operacion');
let resultado;

function calculadora(valor1, operador, valor2){
    switch(operador){
        case '+':
            resultado = (valor1 + valor2);
            document.write(`El resultado es ${resultado}`); 
            break;
        case '-':
            resultado = (valor1 - valor2);
            document.write(`El resultado es ${resultado}`);
            break;
        case '*':
            resultado = (valor1 * valor2);
            document.write(`El resultado es ${resultado}`);
            break;
        case '/':
            resultado = (valor1 / valor2);
            document.write(`El resultado es ${resultado}`);
            break;
        default:
            document.write('Ingresa un operador correcto entre {[+, -, *, /]}');
    }

}

Calculadora(valor1, operador, valor2);