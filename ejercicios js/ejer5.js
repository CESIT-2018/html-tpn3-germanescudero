let retornarPares=function (num){
    let pares=[];
    let contador=0;
    for (let i = 0; i < num; i++) {
        if(i%2==0){
         pares[contador++]=i;
        }
    }
    return pares;
}

let retornarImpares=function (num){
    let pares=[];
    let contador=0;
    for (let i = 0; i < num; i++) {
        if(i%2!=0){
         pares[contador++]=i;
        }
    }
    return pares;
}

let retornarNumPrimos=function (num){
    let primos=[];
    
    for (let i = 1; i <= num; i++) {
        let contador=0;
        for (let j= 1; j <= i; j++) {
            if((i%j)==0){
               contador++;
            }
        }
        if(contador==2){
            primos.push(i);
        }
    }
    return primos;
}

let retornarNumNoPrimos=function (num){
    let primos=[];
    
    for (let i = 1; i <= num; i++) {
        let contador=0;
        for (let j= 1; j <= i; j++) {
            if((i%j)==0){
               contador++;
            }
        }
        if(contador!=2){
            primos.push(i);
        }
    }
    return primos;
}

function conCallback(num,Callback){
    return Callback(num);
}
let num=20;
console.info(retornarPares(num));
console.info(retornarImpares(num));
console.info(retornarNumPrimos(num));
console.info(retornarNumNoPrimos(num));
console.info(conCallback(num,retornarPares));



