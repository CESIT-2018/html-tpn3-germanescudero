function buscarPalabra(oracion){
    const arrayPalabras=oracion.split(" ");
    let palabraLarga=" ";
    for (let i = 0; i < arrayPalabras.length; i++) {
        const palabra=arrayPalabras[i];
        if(palabraLarga.length<palabra.length){
            palabraLarga=palabra;
        }
    }
    return palabraLarga;
}

console.info(buscarPalabra("El desarrollo web es entretenido"));