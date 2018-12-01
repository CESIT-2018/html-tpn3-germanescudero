const mongoose = require('mongoose');
const Calificacion = mongoose.model('calificaciones');

const Producto=mongoose.model('productos');

module.exports = app => {

    app.get("/api/calificaciones", function(req, res) {
         Calificacion.find({}, function(err, calificaciones) {
             Producto.populate(calificaciones, {path: "productos"},function(err, calificaciones){
                 res.status(200).send(calificaciones);
             }); 
         });
     });
 
app.get("/api/calificaciones/productos/:idProducto",function(req,res){
   
        const idProducto=req.params.idProducto;
        
            Calificacion.find({productos:idProducto},function(err,calificaciones){
                Producto.populate(calificaciones,{path:"productos"},function(err,calificaciones){
                    res.status(200).send(calificaciones); 
                }) 
            });
           
    });
    
     app.post("/api/calificaciones", function(req, res){
         Calificacion.create(req.body, function(err, calificaciones){
             if(err){
                 res.send("Error al agregar calificacion");
             }else{
                 res.json(calificaciones);
             }
         });
    });  

  


}

