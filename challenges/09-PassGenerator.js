let passLength = parseInt(prompt('Introduce la longitud de la contraseña', 0));

let hexadecimal = "0123456789ABCDEF";
let pass = "";

for(let i = 0; i<=(passLength-1); i++){
    pass += hexadecimal.charAt(Math.floor(Math.random()*hexadecimal.length));
}

document.write(pass);