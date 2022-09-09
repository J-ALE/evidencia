const { Schema, model, version } = require('mongoose');

const InventarioSchema = Schema({
    serial:{
        type:String,
        required:true,
        unique:true
    },
    model:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image: {
        type:String,
        required:true
    },
    purchaseDate:{
        type:Date,
        required:true
    },
    price: {
        type:Number,
        required:true
    },
    user: {
        type: Schema.ObjectId, ref: "Usuario",
        required: true
    },
    brand: {
        type: Schema.ObjectId, ref: "Marca",
        required: true
    },
    equipmentStatus: {
        type: Schema.ObjectId, ref: "EstadoEquipo",
        required: true
    },
    equipmentType : {
        type: Schema.ObjectId, ref: "TipoEquipo",
        required: true
    }
}, {versionKey:false})

module.exports = model("Inventario",InventarioSchema)