const mongoose=require('mongoose');
const {Schema}= mongoose;

const calificacionEsquema = new Schema({
    
    calificacion: {
        type:Number
    },
    nombres: {
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fecha:{
        type: Date, default: Date.now()
    },
    productos: {
        type:mongoose.Schema.Types.ObjectId,ref:'productos'
    }
   
});

mongoose.model('calificaciones', calificacionEsquema);