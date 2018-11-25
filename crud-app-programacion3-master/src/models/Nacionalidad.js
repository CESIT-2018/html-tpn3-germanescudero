const mongoose = require('mongoose');
const {Schema} = mongoose;//obtiene esquema

const nacionalidadEsquema = new Schema({
  nombrePais: String
});
mongoose.model('nacionalidades', nacionalidadEsquema);