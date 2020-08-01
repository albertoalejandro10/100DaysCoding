// let horas = parseInt(prompt('Ingresa las horas a convertir', 0));
// let minutos = parseInt(prompt('Ingresa los minutos a convertir', 0));

function reloj(horas, minutos){
    HorastoSeconds = horas * 60 * 60;
    MinutosToSeconds = minutos * 60;
    let resultado = HorastoSeconds + MinutosToSeconds
    return resultado;
}

document.write('La cantidad de segundos es: ' + (reloj(horas, minutos)));