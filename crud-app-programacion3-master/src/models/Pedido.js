const mongoose=require('mongoose');
const {Schema}=mongoose;

const pedidoSchema =new Schema({
    usuario:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
    fechaPedido:{type:Date,default:Date.now()},
    totalBruto:{type:Number},
    direccion:{type:String},
    formaPago:{type:String},
    despacho:{type:String},
    descuentos:{type:Number},
    totalNeto:{type:Number}

    
});

mongoose.model('pedidos',pedidoSchema);