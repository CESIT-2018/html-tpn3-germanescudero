const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require("./src/conf");

require('./src/models/Todo');//lee todo que es el modelo

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();
app.use(bodyParser.json());

require('./src/routes/todoRoutes')(app);//lee la linea del router

app.listen(keys.PORT, () => console.info(`Listen in ${keys.PORT}`));