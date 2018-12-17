const mongoose = require('mongoose');
const Carrito=mongoose.model('carritos');
const Producto=mongoose.model('productos');
const Usuario=mongoose.model('users');
module.exports=app=>{
    app.get('/api/carritos',function(req,res){
        Carrito.find({}, function(err, carritos) {
            Producto.populate(carritos, {path: "productos"},function(err, carritos){
                res.status(200).send(carritos);
            }); 
        });
    });

    app.get("/api/carritos/productos/:name",function(req,res){
   
        const name=req.params.name;
        
            Carrito.find({usuario:name,estado:'false'},function(err,carritos){
                Producto.populate(carritos,{path:"productos"},function(err,carritos){
                    res.status(200).send(carritos); 
                }) 
            });
           
    });

    app.get("/api/carritos/:id", async (req, res) => {

        try {
            const id = req.params.id;
            const carrito = await Carrito.findById(id);

            if (carrito) {
                res.send(carrito);
            } else {
                res.status(404).send({ message: `Todo with id '${id}' is not found.` });
            }
        } catch (e) {
            res.status(500).send({ message: `Server error.\n\n${e}` });
        }

    });


    app.post('/api/carritos',function(req,res){
        Carrito.create(req.body, function(err, carritos){
            if(err){
                res.send("Error al agregar al carrito");
            }else{
                res.json(carritos);
            }
        });
    });


    app.put("/api/carritos/:id", async (req, res) => {

        const id = req.params.id;

        const carritoData = req.body || {};
        delete carritoData.createdAt;
        carritoData.updatedAt = new Date();

        try {
            let carrito = await Carrito.findOneAndUpdate({ _id: id }, carritoData, { new: true });

            if (!carrito) {
                res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
            } else {
                res.status(200).send(carrito);
            }
        } catch (err) {
            if (err.name === 'MongoError') {
                res.status(409).send({ message: err.message });
            }
            res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating todo for id='${id}'` });
        }

    });

    app.delete("/api/carritos/:id", async (req, res) => {

        const id = req.params.id;

        try {
            let carrito = await Carrito.findOneAndRemove({ _id: id });

            if (!carrito) {
                return res.status(404).send({ message: 'Not Found Error' });
            } else {
                return res.status(204).send({message:'no se pudo borrar'}); // 204 do not use content
            }
        } catch (err) {
            return res.status(500).send({ message: `Todo with id '${id}' is not found.` });
        }

    });


}
