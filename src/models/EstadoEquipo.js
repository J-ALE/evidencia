const { Schema, model } = require('mongoose');

const EstadoEquipoSchema = Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    status: {
        type:String,
        required:true,
        enum:['Active','Inactive']
    }
}, {timestamps:true,versionKey:false})

module.exports = model('EstadoEquipo',EstadoEquipoSchema);