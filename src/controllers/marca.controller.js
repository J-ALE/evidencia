
const Marca = require("../models/Marca");


 const createMarca = async(req,res) => {

   const { name, status } = req.body;
    
   const marca = new Marca({name, status});

   await marca.save();

   res.json(marca);
    
 }

 const getAllMarcas = async(req,res) => {
    

   const [total, marcas] = await Promise.all([
      Marca.countDocuments(),
      Marca.find()
   ])

   if(!marcas) {
      return res.status(404).json({msg:'No hay marcas para mostrar!'})
   }

   res.json({total,marcas});
    
 }

 const updateMarca = async(req,res) => {
     const { name, status } = req.body;
     const { id } = req.params;

     const marcaUpdated = await Marca.findByIdAndUpdate(id, { name, status });

     res.json(marcaUpdated);
 }

 module.exports = {
    createMarca,
    getAllMarcas,
    updateMarca
 }