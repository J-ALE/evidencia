const getHelperInventory = require("../helpers/getHelperInventario");
const inventoryValidator = require("../helpers/InventarioValidator");
const Inventario = require("../models/Inventario");
const Usuario = require("../models/Usuario");

const createItem = async(req,res) => {
    try {
      const body = req.body;
      const error = inventoryValidator(body,res);
      if(error){
         return res.status(400).json({error:"Every value can not be null,empty,less or equal to 0"});
      }
    const create = Inventario(body);

    await create.save()

    res.json(create);
    } catch (error) {
      res.status(500).json({error:error.message})
    }

 }

 const getAllItems = async(req,res) => {
    const result = await getHelperInventory();
      if(!result.length){
         return res.status(404).json({not_found:"Module type Inventario has no data"})
      }
      res.json(result);
     
 }

 const getItemsByActiveUsers = async(req,res) => {
     
       const result = await getHelperInventory();
   
      const activeUsers = result.filter(({user}) => user.status === "Active");
      if(!activeUsers.length){
         return res.status(404).json({not_found:"Active users not found!"})
      }
      res.json(activeUsers)
           
        
 }

 const getItemsByActiveBrands = async(req,res) => {
   const result = await getHelperInventory();
   
   const activeBrands = result.filter(({brand}) => brand.status === "Active");
   if(!activeBrands.length){
      return res.status(404).json({not_found:"Active users not found!"})
   }
   res.json(activeBrands)
        
 }

 const getItemsByEquipmentStatus = async(req, res) => {
   const result = await getHelperInventory();
   
      const activeEquipmentStatus = result.filter(({equipmentStatus}) => equipmentStatus.status === "Active");
      if(!activeEquipmentStatus.length){
         return res.status(404).json({not_found:"Active users not found!"})
      }
      res.json(activeEquipmentStatus)
           
 }

 const getItemsByEquipmentType = async(req, res) => {
   const result = await getHelperInventory();
   
      const activeEquipmentTypes = result.filter(({equipmentType}) => equipmentType.status === "Active");
      if(!activeEquipmentTypes.length){
         return res.status(404).json({not_found:"Active users not found!"})
      }
      res.json(activeEquipmentTypes)
           
 }

 const updateItems = async(req,res) => {
   try {
      const body = req.body;
      const { id } = req.params;

      const error = inventoryValidator(body,res);
      if(error){
         return res.status(400).json({error:"Every value can not be null,empty,less or equal to 0"});
       }

      const item = await Inventario.findByIdAndUpdate(id,body)

   
      if(!item) {
         return res.status(404).json({not_found:`Item with id = ${id} couldn't be found for being updated!`})
      }
      const itemUpdated = await Inventario.findById(id);
      res.json(itemUpdated);

   } catch (error) {
        res.status(500).json({error:error.message})
   }
 }

 const getItemById = async(req,res) => {
   try {
      const { id } = req.params;
       await Inventario.findById(id)
         .populate('user')
         .populate('brand')
         .populate('equipmentType')
         .populate('equipmentStatus')
         .then((result) =>{
            if(!result) {
               return res.status(404).json({error: `Item with id = ${id} does not exist!`});
            }
            res.status(200).json(result);

         })
      
  
      
   } catch (error) {
      res.status(401).json({error:error.message});
   }
    
 }



 module.exports = {
    createItem,
    getAllItems,
    getItemsByActiveUsers,
    getItemsByActiveBrands,
    getItemsByEquipmentStatus,
    getItemsByEquipmentType,
    updateItems,
    getItemById
 }