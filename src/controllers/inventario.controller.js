const getHelperInventory = require("../helpers/getHelperInventario");

const Inventario = require("../models/Inventario");


const createItem = async(req,res) => {
    
   const item = new Inventario(req.body);

   await item.save();

   res.json(item);
 }

 const getAllItems = async(req,res) => {
    
     const [total, items] = await Promise.all([
         Inventario.countDocuments(),
         Inventario.find()
         .populate('user').
         populate("brand").
         populate("equipmentStatus").
         populate("equipmentType")
     ]);
      if(!items.length){
         return res.status(404).json({not_found:"Module type Inventario has no data"})
      }
      res.json({total,items});
     
 }

 const updateItems = async(req,res) => {
      const body = req.body;
      const { id } = req.params;

      const updateItem = await Inventario.findByIdAndUpdate(id, body);

      res.json(updateItem);
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