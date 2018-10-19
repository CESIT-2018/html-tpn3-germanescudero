const mongoose = require('mongoose');
const {Schema} = mongoose;//obtiene esquema

const productoEsquema = new Schema({
  nombre: String,
  precio:Number,
  stock : Number,
  descripcion: String,
  createdAt: Date,
  updatedAt: Date
});

mongoose.model('productos', productoEsquema);
/*
TABLA SERVICIOS: 
  nombre: String
  descripcion: String
  precioPorHora:Double
*/