let total = parseInt(prompt('Ingrese cantidad de numeros a evaluar?', 0));
let primes = [];

const guardarPrime = (total) =>{
    for(let i= 2; i < total; i++){
        if(esPrimo(i)){
            primes.push(i);
        }
    }
}

const esPrimo = (n) => {
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

guardarPrime(total);

document.write(`<h3 style="color: blue;">Numeros primos</h3></br>
                <p style="color:#aa4621;">${primes}</p>`);