const { Router } = require('express');
const { createUsuario, getAllUsuarios, updateUsuario } = require('../controllers/usuario.controller');

const router = Router();

router.post('/create', createUsuario);
router.get('/get-all',getAllUsuarios);
router.put('/update/:id',updateUsuario);

module.exports = router;