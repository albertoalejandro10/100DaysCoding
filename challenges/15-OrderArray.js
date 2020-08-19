const bubbleSort = (array) =>{

    const longitud = array.length;

    for(let i = 0; i < longitud; i++){

        for(let j = 0; j < longitud - 1 - i; j++){

            if(array[j] > array[j+1]){

                [array[j], array[j+1]] = [array[j+1], array[j]];

            }
        }
    }
    return array;
}

let array = [];

do{

    array.push(parseInt(prompt("Ingresa diez valores para el arreglo")));

}while(array.length <= 10);

const result = bubbleSort(array);
document.write(`<h1>El array ordenado de menor a mayor: <span style="color:#AF792D"> ${result} </span> </h1>`);