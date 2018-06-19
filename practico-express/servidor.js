const express=require(`express`);
const app=express();
const puerto=5000;

app.set("view engine","ejs");

app.get("/index",(req,res)=>{
    console.info("correcto");
    res.render(`index`);
});

app.get("/perfil",(req,res)=>{
    console.info("correcto");
    res.render(`perfil`);
});

app.get("/servicio",(req,res)=>{
    console.info("correcto");
    res.render(`servicio`);
});
app.get("/form",(req,res)=>{
    console.info("correcto");
    res.render(`form`);
});

app.get("/producto",(req,res,next)=>{
    const productosArray=[{nombre:"azucar",cantidad:150},
                          {nombre:"yerba",cantidad:200},
                          {nombre:"fideos",cantidad:400}];
    res.render(`producto`,{productos:productosArray});
});

app.use(express.static('public'));//acceso a la carpeta publica

app.listen (puerto,()=>console.info("Iniciando en  puerto "+puerto));