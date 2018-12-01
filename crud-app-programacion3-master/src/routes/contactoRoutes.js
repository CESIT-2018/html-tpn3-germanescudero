const mongoose = require('mongoose');

const Contacto = mongoose.model('contactos');
const Nacinalidad=mongoose.model('nacionalidades');

module.exports = app => {

   /* app.get("/api/contactos", async (req, res) => {
        const contacto = await Contacto.find({});
        res.send(contacto);
    });*/

   app.get("/api/contactos", function(req, res) {
        Contacto.find({}, function(err, contactos) {
            Nacinalidad.populate(contactos, {path: "nacionalidades"},function(err, contactos){
                res.status(200).send(contactos);
            }); 
        });
    });

    app.post("/api/contactos", function(req, res){
        Contacto.create(req.body, function(err, contactos){
            if(err){
                res.send("Error al agregar contacto");
            }else{
                res.json(contactos);
            }
        });
   });  
}