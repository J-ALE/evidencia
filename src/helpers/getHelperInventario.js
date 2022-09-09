const Inventario = require("../models/Inventario");

const getHelperInventory = async() => {
    let inventoryItems = [];
    await Inventario.find()
        .populate('user').
        populate("brand").
        populate("equipmentStatus").
        populate("equipmentType")
        .then((result) => {
           inventoryItems = result
           
        })
        return inventoryItems;
}
module.exports = getHelperInventory