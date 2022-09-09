const { Schema, model } = require('mongoose');

const TipoEquipoSchema = Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        unique:true,
        trim:true,
    },
    status: {
        type:String,
        required:true,
        enum:['Active','Inactive']
    }
}, {timestamps:true,versionKey:false})

module.exports = model('TipoEquipo',TipoEquipoSchema);