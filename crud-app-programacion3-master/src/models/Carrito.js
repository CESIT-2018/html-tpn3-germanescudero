const mongoose=require('mongoose');
const {Schema}=mongoose;

const carritoSchema=new Schema({
    productos:{type:mongoose.Schema.Types.ObjectId,ref:'productos',required:true},
    usuario:{type:mongoose.Schema.Types.String,ref:'users',required:true},
    cantidad:{type:Number,required:true},
    subtotal:{type:Number,required:true},
    estado:{type:Boolean,default:false},
    fechaPedido:{type:Date,default:Date.now()}
});

mongoose.model('carritos',carritoSchema);