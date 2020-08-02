/*
El reto del día de hoy es escribir un programa que reciba como parámetro “piedra”, “papel”, o “tijera” y determine si ganó el jugador 1 o el jugador 2. Bonus: ¿puedes hacer modificar tu programa para que el ganador sea el que gané 2 de 3 partidas?Ejemplo:```
ppt(“piedra”, “papel”) ➞ “El ganador es el jugador 2”
*/

let valor1 = prompt('Player1: Ingresa tu jugada', 'Piedra, Papel o Tijera');

let valor2 = prompt('Player2: Ingresa tu jugada', 'Piedra, Papel o Tijera');


function game(valor1, valor2){
    if(valor1 == 'Piedra' && valor2 == 'Tijera'){

        document.write('Player 1: Win');

    }else if(valor1 == 'Papel' && valor2 == 'Piedra'){

        document.write('Player 1: Win');

    }else if(valor1 == 'Tijera' && valor2 == 'Papel'){

        document.write('Player 1: Win');

    }else{
        document.write('Player 2: Win');
    }
}

game(valor1, valor2);