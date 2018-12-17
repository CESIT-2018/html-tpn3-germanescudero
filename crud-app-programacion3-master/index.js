const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./src/conf");
const passport=require('passport');
const cookieParser=require('cookie-parser');
const session=require('express-session');
const MongoStore = require('connect-mongo')(session);

require('./src/models/Todo');
require('./src/models/Producto');//mongoose toma el producto esquema
require('./src/models/Servicio');
require('./src/models/User');
require('./src/models/Nacionalidad');
require('./src/models/Contacto')
require('./src/models/Calificacion');
require('./src/models/Carrito');
require('./src/models/Pedido');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {maxAge: 180 * 60 * 1000}
}));



app.use(passport.initialize());
require('./src/passport');
app.use(bodyParser.json());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
 });
 


require('./src/routes/todoRoutes')(app);
require('./src/routes/productoRoutes')(app);
require('./src/routes/servicioRoutes')(app);
require('./src/routes/contactoRoutes')(app);
require('./src/routes/nacionalidadRoutes')(app);
require('./src/routes/calificacionRoutes')(app);
require('./src/routes/carritoRoutes')(app);
require('./src/routes/pedidoRoutes')(app);



const users=require('./src/routes/user');

app.use('/api/users', users);





app.listen(keys.PORT, () => console.info(`Listen in ${keys.PORT}`));

// / npm install
// / cd client
// /npm install  