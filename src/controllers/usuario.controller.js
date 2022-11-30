
const bycriptjs = require('bcryptjs');
const Usuario = require("../models/Usuario");


const createUsuario = async(req,res) => {
    const { name, email, rol, password, status } = req.body;

    const usuario = new Usuario({name, email, password, rol, status});

    const salt = bycriptjs.genSaltSync();

    usuario.password = bycriptjs.hashSync(password,salt);

    await usuario.save();

    res.json(usuario);
}

const getAllUsuarios = async(req,res) => {
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(),
        Usuario.find()
    ])

    if(!usuarios.length) {
        return res.status(404).json({
            msg:'No hay usuarios en la BD'
        })
    }

    res.json({total,usuarios})
}

const updateUsuario = async(req,res) => {
    
        const { id } = req.params;

        const { password, ...resto } = req.body;

        const salt = bycriptjs.genSaltSync();
        resto.password = bycriptjs.hashSync(password,salt);



        const usuarioUpdated = await Usuario.findByIdAndUpdate(id, resto);

        res.json(usuarioUpdated)
        
}

module.exports = {
    createUsuario,
    getAllUsuarios,
    updateUsuario
}