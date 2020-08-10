/*
El reto del día de hoy es escribir un programa que reciba como parámetro “piedra”, “papel”, o “tijera” y determine si ganó el jugador 1 o el jugador 2. Bonus: ¿puedes hacer modificar tu programa para que el ganador sea el que gané 2 de 3 partidas?Ejemplo:```
ppt(“piedra”, “papel”) ➞ “El ganador es el jugador 2”
*/

document.write(`Al mejor de tres <br/>`);

    var contador1 = 0;
    var contador2 = 0;

    for(let i = 0; i<=3; i++){

        llamado();

        if(contador1 == 2){
            let id = 1;
            imprimir(id);
            break;
        }else if(contador2 == 2){
            let id = 2;
            imprimir(id);
            break;
        }

    }


    function imprimir(id){
        document.write(`</br> Jugador${id}: Win`);
    }


    function llamado(){
        
        let valor1 = prompt('Player1: Ingresa tu jugada', 'Piedra - Papel - Tijera');

        let valor2 = prompt('Player2: Ingresa tu jugada', 'Piedra - Papel - Tijera');


        calculo(valor1 , valor2);
    }

    function calculo(valor1, valor2){
                
        if(valor1 == 'Piedra' && valor2 == 'Tijera'){
    
            contador1++;
    
        }else if(valor1 == 'Papel' && valor2 == 'Piedra'){
    
            contador1++;
    
        }else if(valor1 == 'Tijera' && valor2 == 'Papel'){
    
            contador1++;
    
        }else{
            contador2++;
        }
    }