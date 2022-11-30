const { Router } = require('express');
const { check } = require('express-validator');
const { createItem, getAllItems, getItemsByActiveUsers, getItemsByActiveBrands, getItemsByEquipmentStatus, getItemsByEquipmentType, updateItems, getItemById } = require('../controllers/inventario.controller');
const { findMarcaById, findEstadoEquipoById, findTipoEquipoById, findUserById, findItemByModel, findItemBySerial, findItemById } = require('../helpers/validar-db');
const validarCampos = require('../middleware/validarCampos');
const validarJWT = require('../middleware/validarJWT');
const validarRol = require('../middleware/validarRol');



const router = Router();

 
router.post('/create',[
    validarJWT,
    validarRol,
    check('serial','El serial no puede ser vacío').not().isEmpty(),
    check('serial').custom(findItemBySerial),
    check('model', 'El modelo no puede ser vacío').not().isEmpty(),
    check('model').custom(findItemByModel),
    check('color', 'El color no puede ser vacío').not().isEmpty(),
    check('description', 'La descripción no puede ser vacío').not().isEmpty(),
    check('image', 'La imagen no puede ser vacía').not().isEmpty(),
    check('purchaseDate','La fecha de compra no puede ser vacía').not().isEmpty(),
    check('purchaseDate','El campo debe ser una fecha /dd/mm/yyyy').isDate(),
    check('price', 'El precio no debe ser vacío').not().isEmpty(),
    check('price', 'El precio debe ser numérico').isNumeric(),
    check('user','El usuario no puede ser vacío').not().isEmpty(),
    check('brand','La marca no puede ser vacío').not().isEmpty(),
    check('equipmentStatus','El estado del equipo no puede ser vacío').not().isEmpty(),
    check('equipmentType','El tipo de equipo no puede ser vacío').not().isEmpty(),
    check('user._id','Debe ser un id de mongo').isMongoId(),
    check('brand._id','Debe ser un id de mongo').isMongoId(),
    check('equipmentStatus._id','Debe ser un id de mongo').isMongoId(),
    check('equipmentType._id','Debe ser un id de mongo').isMongoId(),
    check('user._id','El id del usuario no puede ser vacío').not().isEmpty(),
    check('brand._id','El id de la marca no puede ser vacío').not().isEmpty(),
    check('equipmentStatus._id','El id del estado equipo no puede ser vacío').not().isEmpty(),
    check('equipmentType._id','El id del tipo de equipo no puede ser vacío').not().isEmpty(),
    check('brand._id').custom(findMarcaById),
    check('equipmentStatus._id').custom(findEstadoEquipoById),
    check('equipmentType._id').custom(findTipoEquipoById),
    check('user._id').custom(findUserById),
    validarCampos
], createItem);

router.get('/get-all',getAllItems);

router.put('/update/:id',[
    validarJWT,
    validarRol,
    check('id', 'El id debe ser un id de mongo').isMongoId(),
    check('id').custom(findItemById),
    check('serial','El serial no puede ser vacío').not().isEmpty(),
    check('serial').custom(findItemBySerial),
    check('model', 'El modelo no puede ser vacío').not().isEmpty(),
    check('model').custom(findItemByModel),
    check('color', 'El color no puede ser vacío').not().isEmpty(),
    check('description', 'La descripción no puede ser vacío').not().isEmpty(),
    check('image', 'La imagen no puede ser vacía').not().isEmpty(),
    check('purchaseDate','La fecha de compra no puede ser vacía').not().isEmpty(),
    check('purchaseDate','El campo debe ser una fecha /dd/mm/yyyy').isDate(),
    check('price', 'El precio no debe ser vacío').not().isEmpty(),
    check('price', 'El precio debe ser numérico').isNumeric(),
    check('user','El usuario no puede ser vacío').not().isEmpty(),
    check('brand','La marca no puede ser vacío').not().isEmpty(),
    check('equipmentStatus','El estado del equipo no puede ser vacío').not().isEmpty(),
    check('equipmentType','El tipo de equipo no puede ser vacío').not().isEmpty(),
    check('user._id','Debe ser un id de mongo').isMongoId(),
    check('brand._id','Debe ser un id de mongo').isMongoId(),
    check('equipmentStatus._id','Debe ser un id de mongo').isMongoId(),
    check('equipmentType._id','Debe ser un id de mongo').isMongoId(),
    check('user._id','El id del usuario no puede ser vacío').not().isEmpty(),
    check('brand._id','El id de la marca no puede ser vacío').not().isEmpty(),
    check('equipmentStatus._id','El id del estado equipo no puede ser vacío').not().isEmpty(),
    check('equipmentType._id','El id del tipo de equipo no puede ser vacío').not().isEmpty(),
    check('brand._id').custom(findMarcaById),
    check('equipmentStatus._id').custom(findEstadoEquipoById),
    check('equipmentType._id').custom(findTipoEquipoById),
    check('user._id').custom(findUserById),
    validarCampos
], updateItems);


router.get('/get-by-active-users',getItemsByActiveUsers);
router.get('/get-by-active-brands',getItemsByActiveBrands);
router.get('/get-by-active-equipment-status',getItemsByEquipmentStatus);
router.get('/get-by-active-equipment-type',getItemsByEquipmentType);
router.get('/get-item/:id', getItemById);

module.exports = router;
