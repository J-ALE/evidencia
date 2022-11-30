
const TipoEquipo = require("../models/TipoEquipo");

 
 const createTipoEquipo = async(req,res) => {
   const { name, status } = req.body;
    
   const tipoEquipo = new TipoEquipo({name, status});

   await tipoEquipo.save();

   res.json(tipoEquipo);
 }

 const getAllTipoEquipos = async(req,res) => {
   const [total, tipo_equipos] = await Promise.all([
      TipoEquipo.countDocuments(),
      TipoEquipo.find()
   ])

   if(!tipo_equipos) {
      return res.status(404).json({msg:'No hay tipo equipos para mostrar!'})
   }

   res.json({total,tipo_equipos});
 }

 const updateTipoEquipo = async(req,res) => {
   const { name, status } = req.body;
   const { id } = req.params;

   const tipoEquipoUpdated = await TipoEquipo.findByIdAndUpdate(id, { name, status });

   res.json(tipoEquipoUpdated);
 }
 module.exports = {
    createTipoEquipo,
    getAllTipoEquipos,
    updateTipoEquipo
 }