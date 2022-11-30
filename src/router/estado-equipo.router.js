const { Router } = require('express');
const { check } = require('express-validator');
const { createEstadoEquipo, getAllEstadosEquipos, updateEstadoEquipo } = require('../controllers/estado-equipo.controller');
const { findEstadoEquipoById } = require('../helpers/validar-db');
const validarCampos = require('../middleware/validarCampos');
const validarJWT = require('../middleware/validarJWT');
const validarRol = require('../middleware/validarRol');


const router = Router();

router.post('/create', [
    validarJWT,
    validarRol,
    check('name','El nombre no puede ser vacío').not().isEmpty(),
    check('status','El estado no puede ser vacío').not().isEmpty(),
    check('status','El estado debe ser: Active o Inactive').isIn(['Active', 'Inactive']),
    validarCampos
], createEstadoEquipo);

router.get('/get-all',[
    validarJWT,
    validarRol,
],getAllEstadosEquipos);

router.put('/update/:id',[
    validarJWT,
    validarRol,
    check('id','El id no es correcto: debe ser un id de mongo').isMongoId(),
    check('id').custom(findEstadoEquipoById),
    check('name','El nombre no puede ser vacío').not().isEmpty(),
    check('status','El estado no puede ser vacío').not().isEmpty(),
    check('status','El estado debe ser: Active o Inactive').isIn(['Active', 'Inactive']),
    validarCampos
], updateEstadoEquipo);

module.exports = router;