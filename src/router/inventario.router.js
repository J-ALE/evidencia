const { Router } = require('express');
const { createItem, getAllItems, getItemsByActiveUsers, getItemsByActiveBrands, getItemsByEquipmentStatus, getItemsByEquipmentType, updateItems, getItemById } = require('../controllers/inventario.controller');


const router= Router();

router.post('/create', createItem);
router.get('/get-all',getAllItems);
router.get('/get-by-active-users',getItemsByActiveUsers);
router.get('/get-by-active-brands',getItemsByActiveBrands);
router.get('/get-by-active-equipment-status',getItemsByEquipmentStatus);
router.get('/get-by-active-equipment-type',getItemsByEquipmentType);
router.put('/update/:id', updateItems);
router.get('/get-item/:id', getItemById);

module.exports = router;
