let type = prompt('Introduce la figura geometrica para calcular su volumen', 'Cilindro, cubo o esfera').toLowerCase();
let altura;
let radio;
let arista;
let base;
let exponent;
let resultado;

const calculos = (types) =>{
    switch(type){
        case 'cilindro':
            altura = parseInt(prompt('Introduce la altura del cilindro', 0));
            radio = parseInt(prompt('Introduce el radio del cilindro', 0));
            base = radio;
            exponent = 2;
            resultado = parseFloat(Math.PI * (base**exponent) * altura).toFixed(2);
            document.write(`<h1>El volumen del cilindro es: <span style="color: #ffff00;"> ${resultado} </span> metros³</h1>`);
            
            break;
        case 'cubo':
            arista = parseInt(prompt('Introduce la arista del cubo', 0));
            base = arista;
            exponent = 3;
            resultado = (base ** exponent);
            document.write(`<h1>El volumen del cubo es: <span style="color: #ffff00;"> ${resultado} </span> metros³</h1>`);
        
            break;
        case 'esfera':
            radio = parseInt(prompt('Introduce el radio de la esfera', 0));
            base = radio;
            exponent = 3;
            resultado = ((4/3)* Math.PI * (base ** exponent)).toFixed(2);
            document.write(`<h1>El volumen de la esfera es: <span style="color: #ffff00;"> ${resultado} </span> metros³</h1>`);

            break;
        default:
            document.write(`<h1 style="color: red;">Introduce bien las letras para realizar el calculo del volumen respectivo</h1>`)
    }
}


calculos(type);