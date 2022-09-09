const express = require('express');
const morgan = require('morgan');

const dbconection = require('../database/mongoConfig');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/tipo-equipo',require('./router/tipo-equipo.router'));
app.use('/api/estado-equipo',require('./router/estado-equipo.router'));
app.use('/api/usuario',require('./router/usuario.router'));
app.use('/api/marca',require('./router/marca.router'));
app.use('/api/inventario',require('./router/inventario.router'));

dbconection();

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})