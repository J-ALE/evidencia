const { Router } = require('express');
const { createMarca, getAllMarcas, updateMarca } = require('../controllers/marca.controller');
const router = Router();

router.post('/create', createMarca);
router.get('/get-all',getAllMarcas);
router.put('/update/:id',updateMarca);

module.exports = router;