const mongoose = require('mongoose');
const Pedido=mongoose.model('pedidos');
const Usuario=mongoose.model('users');


module.exports=app=>{
    app.get('/api/pedidos',function(req,res){
        Pedido.find({}, function(err, pedidos) {
            Usuario.populate(pedidos, {path: "users"},function(err, pedidos){
                res.status(200).send(pedidos);
            }); 
        });
    });


    app.post('/api/pedidos',function(req,res){
        Pedido.create(req.body, function(err, pedidos){
            if(err){
                res.send("Error al agregar pedido");
            }else{
                res.json(pedidos);
            }
        });
    });

    app.put("/api/pedidos/:id", async (req, res) => {

        const id = req.params.id;

        const pedidoData = req.body || {};
        delete pedidoData.createdAt;
        pedidoData.updatedAt = new Date();

        try {
            let pedido = await Pedido.findOneAndUpdate({ _id: id }, pedidoData, { new: true });

            if (!pedido) {
                res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
            } else {
                res.status(200).send(pedido);
            }
        } catch (err) {
            if (err.name === 'MongoError') {
                res.status(409).send({ message: err.message });
            }
            res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating todo for id='${id}'` });
        }

    });

    app.delete("/api/pedidos/:id", async (req, res) => {

        const id = req.params.id;

        try {
            let pedido = await Pedido.findOneAndRemove({ _id: id });

            if (!pedido) {
                return res.status(404).send({ message: 'Not Found Error' });
            } else {
                return res.status(204).send({message:'no se pudo borrar'}); // 204 do not use content
            }
        } catch (err) {
            return res.status(500).send({ message: `Todo with id '${id}' is not found.` });
        }

    });

}