const getHelper = require("../helpers/getHelper");
const postHelper = require("../helpers/postHelper");
const putHelper = require("../helpers/putHelper");
const EstadoEquipo = require("../models/EstadoEquipo");

 const createEstadoEquipo = async(req,res) => {
   
     await postHelper(req.body,EstadoEquipo,res);
    // try {
    //     const body = req.body;
    //     if(Object.values(body).some(value => !value.trim().length)){
    //         return res.status(400).json({error:"Every value can not be null or empty"});
    //     }
    //     const estadoEquipo = await EstadoEquipo(body);
    //     await estadoEquipo.save();
    //     res.json(estadoEquipo);
        
    // } catch (error) {
    //     res.status(400).json({error:error.message})
    // }
 }

 const getAllEstadosEquipos = async(req,res) => { 
      await getHelper(EstadoEquipo,"Estado Equipo",res);
    // const getAll = await EstadoEquipo.find();
    // if(!getAll.length) {
    //     return res.status(404).json({not_found:"Module type Estado Equipo has no data"});
    // }
    // res.json(getAll);
 }

 const updateEstadoEquipo = async(req,res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        await putHelper(body,EstadoEquipo,id,res,"Estado Equipo")
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }

 module.exports = {
    createEstadoEquipo,
    getAllEstadosEquipos,
    updateEstadoEquipo
 }