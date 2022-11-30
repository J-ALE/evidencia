const jwt = require('jsonwebtoken');

const generarJWT = (uid) => {

    return new Promise((resolve,reject) => {
        const payload = {
            uid
        }

        jwt.sign(payload,process.env.SECRETORPRIVATEKEY,{
            expiresIn:'6h'
        },(error,token) => {
            if(error) {
                reject('Algo salió mal a la hora de generar el token')
            }else {
                resolve(token);
            }
        })
    })

}

module.exports = generarJWT;