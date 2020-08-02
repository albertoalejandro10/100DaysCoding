/* ¿Sabes cuántos segundos hay en 32 horas y 20 minutos? No te preocupes, yo tampoco. Para eso tenemos a las computadoras.
El reto del día de hoy es escribir un programa que tome como parámetros las horas y los minutos y que nos calcule los segundos. ¿En cuántos lenguajes de programación puedes escribir este programa? */

let horas = parseInt(prompt('Ingresa las horas a convertir', 0));
let minutos = parseInt(prompt('Ingresa los minutos a convertir', 0));

function reloj(horas, minutos){
    HorastoSeconds = horas * 60 * 60;
    MinutosToSeconds = minutos * 60;
    let resultado = HorastoSeconds + MinutosToSeconds
    return resultado;
}

document.write('La cantidad de segundos es: ' + (reloj(horas, minutos)));