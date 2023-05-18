
const bycriptjs = require('bcryptjs');
const Usuario = require("../models/Usuario");


const createUsuario = async(req,res) => {
    const { password,rol, ...resto } = req.body;

    const user = await Usuario.findOne({email:resto.email});
     
   
     if(user) {
           console.log('Correo duplicado');
        return res.status(400).json({
            ok:false,
            msg: 'Ya existe un usuario con ese email!'
        })
    }

    if(password) {
        const salt = bycriptjs.genSaltSync();
    
        usuario.password = bycriptjs.hashSync(password,salt);

    }
    const usuario = new Usuario(resto);



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
    
       try {
        const { id } = req.params;

        const { password, ...resto } = req.body;

        const user = await Usuario.findOne({email:resto.email});

        if(user?.id.toString() !== id && user) {
           console.log('Correo duplicado - PUT');
            return res.status(400).json({
                ok:false,
                msg: 'Ya existe un usuario con ese email!'
            })
        }
        
        if(password) {

            const salt = bycriptjs.genSaltSync();
            resto.password = bycriptjs.hashSync(password,salt);
        }



        const usuarioUpdated = await Usuario.findByIdAndUpdate(id, resto, {new:true});

        res.json(usuarioUpdated)
       } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Hable con el ADMIN'
        })
       }
        
}

module.exports = {
    createUsuario,
    getAllUsuarios,
    updateUsuario
}