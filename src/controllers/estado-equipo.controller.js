
const EstadoEquipo = require("../models/EstadoEquipo");

 const createEstadoEquipo = async(req,res) => {


     const { name, status } = req.body;

     const estadoEquipo = new EstadoEquipo({name,status});

     await estadoEquipo.save();

     res.json(estadoEquipo);
   

    
 }

 const getAllEstadosEquipos = async(req,res) => { 
      

    const [total, estados] = await Promise.all([
       EstadoEquipo.countDocuments(),
       EstadoEquipo.find()
    ]);

    if(!estados){
      return res.status(404).json({
         msg: "No hay datos para los estados de los equipos"
      })
    }

    res.json({total,estados});
    
 }

 const updateEstadoEquipo = async(req,res) => {
    const { name,status } = req.body;
    const { id } = req.params;

    const updateStatus = await EstadoEquipo.findByIdAndUpdate(id,{name,status});

    res.json(updateStatus);
 }

 module.exports = {
    createEstadoEquipo,
    getAllEstadosEquipos,
    updateEstadoEquipo
 }