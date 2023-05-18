const { Router } = require('express');
const { check } = require('express-validator');
const { createTipoEquipo, getAllTipoEquipos, updateTipoEquipo } = require('../controllers/tipo-equipo.controller');
const { findTipoEquipoById } = require('../helpers/validar-db');
const validarCampos = require('../middleware/validarCampos');
const validarJWT = require('../middleware/validarJWT');
const validarRol = require('../middleware/validarRol');

const router = Router();

router.post('/create',[
    // validarJWT,
    // validarRol,
    check('name','El nombre no puede ser vacío').not().isEmpty(),
    check('status','El estado no puede ser vacío').not().isEmpty(),
    check('status','El estado debe ser: Active o Inactive').isIn(['Active', 'Inactive']),
    validarCampos
], createTipoEquipo);

router.get('/get-all',[
    // validarJWT,
    // validarRol,
],getAllTipoEquipos);

router.put('/update/:id',[
    // validarJWT,
    // validarRol,
    check('id','Id inválido: Debe ser un id de mongo').isMongoId(),
    check('id').custom(findTipoEquipoById),
    check('name','El nombre no puede ser vacío').not().isEmpty(),
    check('status','El estado no puede ser vacío').not().isEmpty(),
    check('status','El estado debe ser: Active o Inactive').isIn(['Active', 'Inactive']),
    validarCampos
],updateTipoEquipo);

module.exports = router;