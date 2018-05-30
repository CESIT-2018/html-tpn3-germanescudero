function cantidadMonedas(moneda){
    let resto=moneda;
    var monedas=[];
    while(resto!=0){
        
        if(resto>25){
            resto-=25;
            monedas.push(25);
        }
        else if(resto>10){
            monedas.push(10);
            resto-=10;
        }else if(resto>5){
            monedas.push(5);
            resto-=5;
        }else if(resto>2){
            monedas.push(2);
            resto-=2;
        }else if(resto>=1){
            monedas.push(1);
            resto-=1;
        }
    }
    return monedas;
}

console.info(cantidadMonedas(60));