const mongoose=require('mongoose');
const {Schema}= mongoose;
//const nacionalidad=mongoose.model("Nacionalidad");

const contactoEsquema = new Schema({
    nombre: {
      type:String,
      required:true
  },
    apellido:{
      type:String,
      required:true
  },
    sexo:{
      type:String,
      required:true
  },
    email:{
      type:String,
      required:true
  },
    fechaNacimiento:{
      type:Date,
      required:true
  },
    nacionalidad:{type:mongoose.Schema.Types.ObjectId, ref:'Nacionalidad'},
    comentario:{
      type:String,
      required:true
  },
  });

mongoose.model('contactos', contactoEsquema);