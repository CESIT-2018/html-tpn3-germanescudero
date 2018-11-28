const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./src/conf");
const passport=require('passport');

require('./src/models/Todo');
require('./src/models/Producto');//mongoose toma el producto esquema
require('./src/models/Servicio');
require('./src/models/User');
require('./src/models/Nacionalidad');
require('./src/models/Contacto')
require('./src/models/Calificacion');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(passport.initialize());
require('./src/passport');
app.use(bodyParser.json());

require('./src/routes/todoRoutes')(app);
require('./src/routes/productoRoutes')(app);
require('./src/routes/servicioRoutes')(app);
require('./src/routes/contactoRoutes')(app);
require('./src/routes/nacionalidadRoutes')(app);
require('./src/routes/calificacionRoutes')(app);
const users=require('./src/routes/user');

app.use('/api/users', users);





app.listen(keys.PORT, () => console.info(`Listen in ${keys.PORT}`));

// / npm install
// / cd client
// /npm install  