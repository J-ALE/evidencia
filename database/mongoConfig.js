const mongoose = require('mongoose');

const dbconection = async() => {
    try {
       mongoose.connect(process.env.MONGO_URL);
       console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbconection;