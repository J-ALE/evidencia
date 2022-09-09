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
    status: {
        type:String,
        required:true,
        enum:['Active','Inactive']
    }
},{timestamps:true,versionKey:false})

module.exports = model('Usuario',UsuarioSchema);