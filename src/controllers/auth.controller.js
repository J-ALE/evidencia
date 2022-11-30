const Usuario = require("../models/Usuario");
const bycriptjs = require('bcryptjs');
const generarJWT = require("../helpers/generarJWT");

const userLogin = async(req,res) => {

    const { email, password } = req.body;

    const usuario = await Usuario.findOne({email});

    if(!usuario) {
      return res.status(404).json({
        msg: 'Email o contraseña inválido - email'
      })
    }
    const validarPassword = bycriptjs.compareSync(password,usuario.password);

    if(!validarPassword) {
        return res.status(404).json({
            msg: 'Email o contraseña inválido - password'
        })
    }

    if(usuario.status === 'Inactive') {
        return res.status(401).json({
            msg: 'El usuario está inactivo - No es posible logearse'
        })
    }


    const token = await generarJWT(usuario.id);

    res.json({
        usuario,
        token
    });

}

module.exports = userLogin;