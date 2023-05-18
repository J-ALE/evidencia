const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    // password: {
    //     type:String,
    //     required:true
    // },
    // rol: {
    //     type:String,
    //     required:true,
    //     enum:['ADMIN_ROLE','DOCENTE_ROLE']
    // },
    status: {
        type:String,
        required:true,
        enum:['Active','Inactive']
    }
},{timestamps:true,versionKey:false})

UsuarioSchema.methods.toJSON = function(){

    const { _id, ...resto } = this.toObject();
     resto.uid = _id;
     return resto;

}

module.exports = model('Usuario',UsuarioSchema);