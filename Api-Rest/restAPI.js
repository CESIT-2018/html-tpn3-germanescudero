//en la nube vamos a tener servicios, una api de google,otra de mercadolibre....hay tareas que la hacemos con proveedores externos
//rest o soap(descriptor xml), nos comunicamos con json sobre http: a travez post(enviar o crear), get(obtener informacion), put(actualizar),delete(borrar), path
//expondremos una api emulando en un array y con postman lo consumimos...cereo usuario...se actualiza(la api)..manda un mail atravez de node saltando los proxy y otros
const express=require('express');
const app=express();
const port=3000;
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const listaProducto=[
                    {id:1,nombre:"azucar"},
                    {id:2,nombre:"arroz"},
                    {id:3,nombre:"fideo"}
                    ];
const getProducto=(id)=>{
   /* for (let i in listaProducto){
        if(listaProducto[i].id==id){
            return listaProducto[i];
        }
    }*/
    //igual al de abajo
    return listaProducto.find((p)=>p.id==id);//find requiere un callback...deja en p cada elemento del array...y devuelve un array u objecto....macheando con id
}

const agregarProducto=(prod)=>{
    if(typeof prod==`object` && prod.nombre){
        prod.id=listaProducto.length+1;
        listaProducto.push(prod);//lo agrega al array
        return prod;
    }
    return null;
}

const actualizarNombre=(id,nombre)=>{
    for (let i=0;i<listaProducto.length;i++){
      if(listaProducto[i].id==id){
            listaProducto.splice(i,1,(id,nombre));
            return listaProducto[i];
        }
    }
    return null;
}

const borrarProducto=(id)=>{
    let nuevaLista=[];
    for (let i=0;i<listaProducto.length;i++){
        if(listaProducto[i].id==id){
              listaProducto.splice(i,1);
          }
      }
    for (let i=0;i<listaProducto.length;i++){
        listaProducto[i].id=i+1;
        nuevaLista=listaProducto[i];
        
    }
      return nuevaLista;
}


app.get('/productos',(req,res)=>{
    //res.send(`obteniendo productos`);
    console.info("correcto al mostrar listado de articulos");//TODO:sera borrado cuando implementemos middlewares  
    res.send(listaProducto);//lo ponemos asi para q lo interprete postman

});

app.get('/productos/:id',(req,res,next)=>{
    console.info("correcto a mostrar un articulo en particular");//TODO:sera borrado cuando implementemos middlewares
    //res.send({"mensaje":"GET"});//CONSULTA PRODUCTOS POR ID
    const producto=getProducto(req.params.id);
    if(producto){
        res.status(200).send(producto);//200(lo tiene) y 404(no lo encontro) codigo de la especificacion propio de http 
    }else{
        res.status(404).send({mensaje:`no encuentro producto por id=${req.params.id}`});
    }
});

app.post('/productos',(req,res)=>{//habilita el tab del body en postman
    console.info("articulo ingresado con exito");//TODO:sera borrado cuando implementemos middlewares
    //res.send({"mensaje":"POST"});//CREAMOS PRODUCTOS, AL WEB SERVICES
    const producto=agregarProducto(req.body);//parsea en el json y llega al resq
    if(producto){
        res.status(201).send(producto);//201 es create
    }else{
        res.status(400).send({mensaje:`el producto no pudo ser creado`});//400 bad resq
    }
});

app.put('/productos/:id',(req,res)=>{
    console.info("articulo modificado con exito");//TODO:sera borrado cuando implementemos middlewares
    //res.send({"mensaje":"PUT"});//ACTUALIZAR UN PRODUCTO ESPECIFICO
    const producto=actualizarNombre(req.params.id,req.body);
    if(producto){
        res.status(200).send(producto);
    }else{
        res.status(404).send({mesaje:`no encuentro producto por id=${req.params.id}`});
    }
});

app.delete('/productos/:id',(req,res)=>{
    console.info("articulo borrado con exito");//TODO:sera borrado cuando implementemos middlewares
    //res.send({"mensaje":"DELETE"});//BORRO UN PRODUCTO
    const producto=borrarProducto(req.params.id);
    if(producto){
        res.status(200).send(producto);
    }else{
        res.status(404).send({mesaje:`no encuentro producto por id=${req.params.id}`});
    }
});

app.listen(port,()=>{console.info("abriendo puerto "+port)});