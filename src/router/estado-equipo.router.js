const { Router } = require('express');
const { createEstadoEquipo, getAllEstadosEquipos, updateEstadoEquipo } = require('../controllers/estado-equipo.controller');


const router = Router();

router.post('/create', createEstadoEquipo);
router.get('/get-all',getAllEstadosEquipos);
router.put('/update/:id', updateEstadoEquipo);

module.exports = router;