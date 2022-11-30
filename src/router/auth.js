
const { Router } = require('express');
const { check } = require('express-validator');
const userLogin = require('../controllers/auth.controller');
const validarCampos = require('../middleware/validarCampos');

const router = Router();

router.post('/login',[
    check('email', 'El campo email no debe ser vacío').not().isEmpty(),
    check('password', 'El campo password no debe ser vacío').not().isEmpty(),
    validarCampos
], userLogin)

module.exports = router;