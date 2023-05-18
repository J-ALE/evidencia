const { Router } = require('express');
const { check } = require('express-validator');
const { createUsuario, getAllUsuarios, updateUsuario } = require('../controllers/usuario.controller');
const { findUserByEmail, findUserById } = require('../helpers/validar-db');
const validarCampos = require('../middleware/validarCampos');
// const validarJWT = require('../middleware/validarJWT');
// const validarRol = require('../middleware/validarRol');

const router = Router();

router.post('/create',[
    // validarJWT,
    // validarRol,
    check('name','El nombre no puede ser vacío').not().isEmpty(),
    check('email', 'El email no puede ser vacío').not().isEmpty(),
    check('email', 'Email inválido').isEmail(),
    // check('password', 'El password debe tener mínimo 7 caracteres').isLength({min:7}),
    // check('rol','El rol debe ser ADMIN_ROLE o DOCENTE_ROLE').isIn(['ADMIN_ROLE', 'DOCENTE_ROLE']),
    check('status', 'El estado no puede ser vacío').not().isEmpty(),
    check('status', 'El estado debe ser: Active o Inactive').isIn(['Active', 'Inactive']),
    validarCampos
], createUsuario);
router.get('/get-all',[
    // validarJWT,
    // validarRol,
],getAllUsuarios);

router.put('/update/:id',[
    // validarJWT,
    // validarRol,
    check('id', 'Id inválido: debe ser un id de mongo').isMongoId(),
    check('id').custom(findUserById),
    check('name','El nombre no puede ser vacío').not().isEmpty(),
    check('email', 'El email no puede ser vacío').not().isEmpty(),
    check('email', 'Email inválido').isEmail(),
    
    // check('password', 'El password debe tener mínimo 7 caracteres').isLength({min:7}),
    // check('rol','El rol debe ser ADMIN_ROLE o DOCENTE_ROLE').isIn(['ADMIN_ROLE', 'DOCENTE_ROLE']),
    check('status', 'El estado no puede ser vacío').not().isEmpty(),
    check('status', 'El estado debe ser: Active o Inactive').isIn(['Active', 'Inactive']),
    validarCampos
],updateUsuario);

module.exports = router;