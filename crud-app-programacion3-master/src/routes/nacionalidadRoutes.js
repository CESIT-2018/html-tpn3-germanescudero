const mongoose = require('mongoose');

const Nacionalidad = mongoose.model('nacionalidades');

module.exports = app => {

    app.get("/api/nacionalidades", async (req, res) => {
        const nacionalidad = await Nacionalidad.find({});
        res.send(nacionalidad);
    });



    app.post("/api/nacionalidades", async (req, res) => {

        const { nombrePais} = req.body;

        const nacionalidad = new Nacionalidad({
            nombrePais
        });

        try {
            let newNacionalidad = await nacionalidad.save();

            res.status(201).send(newNacionalidad);

        } catch (err) {

            if (err.name === 'MongoError') {
                res.status(409).send(err.message);
            }

            res.status(500).send(err);
        }

    });
}