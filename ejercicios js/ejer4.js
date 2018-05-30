let array2=[1,0,2,3,4];
let array1=[3,5,6,7,8,13];

function sumarArray(vector1,vector2){
    let suma=[];
    let contador=0;
    //let min=Math.max(vector1.length,vector2.length)
    let longitud=0;
    if(vector1.length>vector2.length){
        longitud=vector1.length;
    }else{
        longitud=vector2.length
    }
    for (let i = 0; i < longitud; i++) {
        if(vector1.length<longitud){
            vector1.push(0);
        }else if(vector2.length<longitud){
            vector2.push(0);
        }
        
    }
    for (let i = 0; i < longitud; i++) {
       suma.push(vector1[i]+vector2[i]);
    }
    
    return suma;
}

console.log(sumarArray(array1,array2));
