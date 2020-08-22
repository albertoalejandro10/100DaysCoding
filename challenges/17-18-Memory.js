const result = processing();

const remember = (result) => {

    let registry = "";
    const arreglo = Array.from(result);

    for(i=0; i < result.length; i++){
        registry += `</br>
        Character:
        ${i+1}: <span style="color: #C00F;"> ${arreglo[i]} </span>
        `;
    }

    document.write(`<h1> Simbolos:${registry} </h1>`);
}

remember(result);