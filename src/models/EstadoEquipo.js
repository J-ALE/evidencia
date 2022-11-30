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

EstadoEquipoSchema.methods.toJSON = function(){
    const { _id, ...resto } = this.toObject();

    resto.estado_id = _id

    return resto;
    
    
}

module.exports = model('EstadoEquipo',EstadoEquipoSchema);