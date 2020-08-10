/* 
Este es un juego sencillo que trata de adivinar un número aleatorio, el truco está en que no sabes cuál es ese número pero en cada ingresarás un número y sabrás si este es mayor o menor al número secreto. Así que toma en cuenta estas restricciones para intentar adivinar el número y no olvides contar el número de intentos para mostrarlo una vez aciertes.
*/

var min = 1;
var max = 20;
var aleatorio = Math.floor(Math.random() * max - min +1) + min;
var intentos = 0;
var numero;

for(let i = 0; i<20; i++){
    intentos++;
    numero = parseInt(prompt('Ingresa un numero entre '+min+' y el '+max));
    
    if(numero >= min && numero <= max){

        if(numero < aleatorio){

            alert('El numero ingresado es menor al esperado');

        }else if(numero > aleatorio){

            alert('El numero ingresado es mayor al esperado');

        }else if(numero == aleatorio){

            alert('Felicitaciones acertaste el numero, en un total de '+intentos+' intentos');
            break;
        }

    }else{
        alert('Debe ingresar un numero entre '+min+' y '+max);
    }
}