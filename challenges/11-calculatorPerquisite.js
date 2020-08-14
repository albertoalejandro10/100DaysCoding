const pedidos = () =>{
    let cantidad = parseInt(prompt('¿Cuantos platillos ordenaras entre [1-10]?', 0));
    if(cantidad >= 10){
        alert('Muchoooos pedidos, vuelve a intentar');
        return pedidos();
    }else{
        return cantidad;
    }
}

const subtotal = () => {

    const pedido = pedidos();

    let valorTotal = 0;
    for(let i = 0; i <= (pedido-1); i++){
        let valor = parseInt(prompt('Ingresa el valor del platillo', 0));
        valorTotal += valor;
    }
    return valorTotal; 
}


const costeTotal = () => {
    const resultado = subtotal();

    let propina = parseFloat((resultado * 10)/100);
    document.write(`La propina a pagar es: <span style="color: red;">${propina}</span></br>`);
    let total =  parseFloat(resultado + propina);
    document.write(`El monto a pagar incluyendo propina es: <span style="color: red;">${total}</span></br>`);    
}

costeTotal();