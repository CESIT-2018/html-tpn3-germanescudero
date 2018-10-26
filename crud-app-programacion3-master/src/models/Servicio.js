const mongoose = require('mongoose');
const {Schema} = mongoose;//obtiene esquema

const servicioEsquema = new Schema({
  nombre: String,
  precioPorHora:Number,
  descripcion: String,
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('servicios', servicioEsquema);
/*
TABLA SERVICIOS: 
  nombre: String
  descripcion: String
  precioPorHora:Double
*/