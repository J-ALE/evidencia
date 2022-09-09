const { Schema, model } = require('mongoose');

const EstadoEquipoSchema = Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true
    },
    status: {
        type:String,
        required:true,
        enum:['Active','Inactive']
    }
}, {timestamps:true,versionKey:false})

module.exports = model('EstadoEquipo',EstadoEquipoSchema);