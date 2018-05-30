
function retornarElementos(num,array) {
    let vector=[];
    let vector1=[];
    let contador=0;
    for (let i = 0; i < array.length; i++) {
        if(i<num){
           vector[contador++]=array[i];
        }
    }
    return vector;
}
let arreglo=[7,9,0,-2];
numero=1;
console.log(retornarElementos(numero,arreglo));
console.log(retornarElementos(3,[]));
console.log(retornarElementos(3,arreglo));
console.log(retornarElementos(6,arreglo));
console.log(retornarElementos(-3,arreglo));