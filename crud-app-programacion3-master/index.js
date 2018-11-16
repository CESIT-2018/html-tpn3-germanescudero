const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./src/conf");
const passport=require('passport');

require('./src/models/Todo');
require('./src/models/Producto');//mongoose toma el producto esquema
require('./src/models/Servicio');
require('./src/models/User');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(passport.initialize());
require('./src/passport');
app.use(bodyParser.json());

require('./src/routes/todoRoutes')(app);
require('./src/routes/productoRoutes')(app);
require('./src/routes/servicioRoutes')(app);
const users=require('./src/routes/user');

app.use('/api/users', users);


app.listen(keys.PORT, () => console.info(`Listen in ${keys.PORT}`));

// / npm install
// / cd client
// /npm install  