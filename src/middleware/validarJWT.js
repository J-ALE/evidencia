const { request } = require("express");
const jwt = require('jsonwebtoken');
const Usuario = require("../models/Usuario");


const validarJWT = async(req = request,res,next) => {

    const token = req.header('token');

    if(!token) {
       return res.status(401).json({
            msg:'Se requiere un token de acceso: Acción denegada!'
        })
    }

    try {
        const { uid } = jwt.verify(token,process.env.SECRETORPRIVATEKEY);
        const usuario = await Usuario.findById(uid);

        if(!usuario) {
            return res.status(401).json({
                msg:'El usuario ha sido eliminado de la BD - No es posible ejecutar la acción'
            })
        }
        if(usuario.status === 'Inactive') {
            return res.status(401).json({
                msg:'El usuario está inactivo - No es posible ejecutar la acción'
            })
        }
        req.usuario = usuario;
        next();
    } catch (error) {
        res.status(401).json({
            msg: 'Token no válido o expiró - Acción denegada!'
        })
    }

}

module.exports = validarJWT;