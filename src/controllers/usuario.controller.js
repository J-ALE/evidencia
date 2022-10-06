const getHelper = require("../helpers/getHelper");
const userValidator = require("../helpers/usuarioValidator");
const Usuario = require("../models/Usuario");
const regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

const createUsuario = async(req,res) => {
    try {
        const body = req.body;
        const users = await Usuario.find();

        const validator = userValidator(body,res,users,regex);
        if(validator[0]) {
            return validator[1];
        }

        
        const usuario = Usuario(body);
        await usuario.save()
        res.status(201).json(usuario);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: error.message})
    }
}

const getAllUsuarios = async(req,res) => {
    await getHelper(Usuario,"Usuario",res);
    // const getAll = await Usuario.find();
    // if(!getAll.length) {
    //     return res.status(404).json({not_found:"Module type Usuario has no data"});
    // }
    // res.json(getAll);
}

const updateUsuario = async(req,res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const users = await Usuario.find();
        
        const validator = userValidator(body,res,users,regex);
        if(validator[1]) {
            return validator[0];
        }

        const usuario = await Usuario.findByIdAndUpdate(id,body);
        if(!usuario) {
           return res.status(404).json({not_found:`Usuario with id = ${id} couldn't be found for being updated!`})
        }
        const usuarioUpdated = await Usuario.findById(id);
        res.json(usuarioUpdated);
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    createUsuario,
    getAllUsuarios,
    updateUsuario
}