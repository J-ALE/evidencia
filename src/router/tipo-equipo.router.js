const { Router } = require('express');
const { createTipoEquipo, getAllTipoEquipos, updateTipoEquipo } = require('../controllers/tipo-equipo.controller');

const router = Router();

router.post('/create', createTipoEquipo);
router.get('/get-all',getAllTipoEquipos);
router.put('/update/:id',updateTipoEquipo);

module.exports = router;