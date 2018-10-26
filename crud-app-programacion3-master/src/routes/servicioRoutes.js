const mongoose = require('mongoose');

const Servicio = mongoose.model('servicios');

module.exports = app => {

    app.get("/api/servicios", async (req, res) => {
        const servicios = await Servicio.find({});
        res.send(servicios);
    });//con este metodo, obtenemos todos los productos

    app.get("/api/servicios/:id", async (req, res) => {

        try {
            const id = req.params.id;
            const servicio = await Servicio.findById(id);

            if (servicio) {
                res.send(servicio);
            } else {
                res.status(404).send({ message: `Todo with id '${id}' is not found.` });
            }
        } catch (e) {
            res.status(500).send({ message: `Server error.\n\n${e}` });
        }

    });//busco un producto por id


    app.post("/api/servicios", async (req, res) => {

        const { nombre, precioPorHora, descripcion } = req.body;

        const servicio = new Servicio({
            nombre,
            precioPorHora,
            descripcion,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        try {
            let newServicio = await servicio.save();

            res.status(201).send(newServicio);

        } catch (err) {

            if (err.name === 'MongoError') {
                res.status(409).send(err.message);
            }

            res.status(500).send(err);
        }

    });//con este metodo creamos un nuevo producto


    app.put("/api/servicios/:id", async (req, res) => {

        const id = req.params.id;

        const servicioData = req.body || {};
        delete servicioData.createdAt;
        servicioData.updatedAt = new Date();

        try {
            let servicio = await Servicio.findOneAndUpdate({ _id: id }, servicioData, { new: true });

            if (!servicio) {
                res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
            } else {
                res.status(200).send(servicio);
            }
        } catch (err) {
            if (err.name === 'MongoError') {
                res.status(409).send({ message: err.message });
            }
            res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating todo for id='${id}'` });
        }

    });//modifico un producto

    app.delete("/api/servicios/:id", async (req, res) => {

        const id = req.params.id;

        try {
            let servicio = await Servicio.findOneAndRemove({ _id: id });

            if (!servicio) {
                return res.status(404).send({ message: 'Not Found Error' });
            } else {
                return res.status(204).send({message:'no se pudo borrar'}); // 204 do not use content
            }
        } catch (err) {
            return res.status(500).send({ message: `Todo with id '${id}' is not found.` });
        }

    });
};
