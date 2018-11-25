const mongoose=require('mongoose');
const {Schema}= mongoose;

const calificacionEsquema = new Schema({
    producto: {
        type:mongoose.Schema.Types.ObjectId,ref:'Producto'
    },
    calificacion: {
        type:Number,
        enum:[1,2,3,4,5]
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
    }

});

mongoose.model('calificaciones', calificacionEsquema);