const { Schema, model } = require('mongoose');

const MarcaSchema = Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],
    },
    status: {
        type:String,
        required:true,
        enum:['Active','Inactive']
    }
},{timestamps:true,versionKey:false})

module.exports = model('Marca',MarcaSchema);