const { request } = require("express");

const validarRol = (req = request,res,next) => {
    const usuario = req.usuario;

    if(usuario.rol !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: 'No eres administrador para ejecutar esta acción - Acción denegada'
        })
    }
    next();

}

module.exports = validarRol;