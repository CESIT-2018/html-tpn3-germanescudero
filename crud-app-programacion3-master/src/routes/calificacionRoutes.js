const mongoose = require('mongoose');
const Calificacion = mongoose.model('calificaciones');

const Producto=mongoose.model('productos');

module.exports = app => {

    /* app.get("/api/contactos", async (req, res) => {
         const contacto = await Contacto.find({});
         res.send(contacto);
     });*/
 
    app.get("/api/calificaciones", function(req, res) {
         Calificacion.find({}, function(err, calificaciones) {
             Producto.populate(calificaciones, {path: "producto"},function(err, calificaciones){
                 res.status(200).send(calificaciones);
             }); 
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

