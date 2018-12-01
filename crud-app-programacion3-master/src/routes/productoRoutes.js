const mongoose = require('mongoose');

const Producto = mongoose.model('productos');
//const Calificacion = mongoose.model('calificaciones');

//const ObjectId=require('mongodb').ObjectID;

module.exports = app => {

    app.get("/api/productos", async (req, res) => {
        const productos = await Producto.find({});
        res.send(productos);
    });//con este metodo, obtenemos todos los productos*/

   


    

    app.get("/api/productos/:id", async (req, res) => {

        try {
            const id = req.params.id;
            const producto = await Producto.findById(id);

            if (producto) {
                res.send(producto);
            } else {
                res.status(404).send({ message: `Todo with id '${id}' is not found.` });
            }
        } catch (e) {
            res.status(500).send({ message: `Server error.\n\n${e}` });
        }

    });//busco un producto por id




    app.post("/api/productos", async (req, res) => {

        const {nombre, precio, stock, descripcion, calificacion} = req.body;

        const producto = new Producto({
         
            nombre,
            precio,
            stock,
            descripcion,
            calificacion,
            
            createdAt: new Date(),
            updatedAt: new Date()
        });

        try {
            let newProducto = await producto.save();

            res.status(201).send(newProducto);

        } catch (err) {

            if (err.name === 'MongoError') {
                res.status(409).send(err.message);
            }

            res.status(500).send(err);
        }

    });//con este metodo creamos un nuevo producto


    app.put("/api/productos/:id", async (req, res) => {

        const id = req.params.id;

        const productoData = req.body || {};
        delete productoData.createdAt;
        productoData.updatedAt = new Date();

        try {
            let producto = await Producto.findOneAndUpdate({ _id: id }, productoData, { new: true });

            if (!producto) {
                res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
            } else {
                res.status(200).send(producto);
            }
        } catch (err) {
            if (err.name === 'MongoError') {
                res.status(409).send({ message: err.message });
            }
            res.status(500).send({ message: `Unknown Server Error.\n\n Unknow server error when updating todo for id='${id}'` });
        }

    });//modifico un producto

    app.delete("/api/productos/:id", async (req, res) => {

        const id = req.params.id;

        try {
            let producto = await Producto.findOneAndRemove({ _id: id });

            if (!producto) {
                return res.status(404).send({ message: 'Not Found Error' });
            } else {
                return res.status(204).send({ message: 'no se pudo borrar' }); // 204 do not use content
            }
        } catch (err) {
            return res.status(500).send({ message: `Todo with id '${id}' is not found.` });
        }

    });//borra un producto por id
    /*  
 
     app.get("/api/todos/query", async (req, res) => {
 
         try {
             var regExpTerm = new RegExp(req.query.term, 'i');
             var regExpSearch = [{ name: { $regex: regExpTerm } }, { description: { $regex: regExpTerm } }];
             const todos = await Todo.find({ '$or': regExpSearch });
 
             res.status(200).send(todos);
         } catch (e) {
             res.status(500).send({ message: e });
         }
 
     });
 
     
 
    
     
     app.put("/api/todos/:id/approve/toggle", async (req, res) => {
 
         const id = req.params.id;
         
         const todo = await Todo.findOne({ _id: id });
         
         if (!todo) {
             return res.status(404).send({ message: `Error when update record with id ${id}.\n\n${e}` })
         }
 
         if (todo) {
             todo.isDone = !todo.isDone;
             todo.updatedAt = new Date();
             todo.save();
             res.status(200).send(todo);
         } else {
             res.status(404).send({ message: `Todo with id '${id}' is not found.` })
         }
             
     });
 
     app.delete("/api/todos/:id", async (req, res) => {
 
         const id = req.params.id;
 
         try {
             let todo = await Todo.findOneAndRemove({ _id: id });
 
             if (!todo) {
                 return res.status(404).send({ message: 'Not Found Error' });
             } else {
                 return res.status(204); // 204 do not use content
             }
         } catch (err) {
             return res.status(500).send({ message: `Todo with id '${id}' is not found.` });
         }
 
     });
     ALT + SHIFT + A
  */
};
