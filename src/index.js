const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dbconection = require('../database/mongoConfig');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 8083;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/tipo-equipo',require('./router/tipo-equipo.router'));
app.use('/api/estado-equipo',require('./router/estado-equipo.router'));
app.use('/api/usuario',require('./router/usuario.router'));
app.use('/api/marca',require('./router/marca.router'));
app.use('/api/inventario',require('./router/inventario.router'));
// Ruta del servicio de autenticación de usuario
app.use('/api/auth', require('./router/auth'));

dbconection();

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})