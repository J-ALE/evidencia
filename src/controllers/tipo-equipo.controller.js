const getHelper = require("../helpers/getHelper");
const postHelper = require("../helpers/postHelper");
const putHelper = require("../helpers/putHelper");
const { findById } = require("../models/TipoEquipo");
const TipoEquipo = require("../models/TipoEquipo");

 
 const createTipoEquipo = async(req,res) => {
    await postHelper(req.body,TipoEquipo,res);
    // try {
    //     const body = req.body;
    //     if(Object.values(body).some(value => !value.trim().length)){
    //         return res.status(400).json({error:"Every value can not be null or empty"});
    //     }
        
    //     const tipoEquipo = TipoEquipo(body)
    //     await tipoEquipo.save()
    //     res.status(201).json(tipoEquipo);
        
    // } catch (error) {
    //     res.status(400).json({error: error.message})
    // }
 }

 const getAllTipoEquipos = async(req,res) => {
    await getHelper(TipoEquipo,"Tipo Equipo",res);
    // const getAll = await TipoEquipo.find();
    // if(!getAll.length) {
    //     return res.status(404).json({not_found:"Module type Tipo Equipo has no data"});
    // }
    // res.json(getAll);
 }

 const updateTipoEquipo = async(req,res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        
        await putHelper(body,TipoEquipo,id,res,"Tipo equipo")
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }
 module.exports = {
    createTipoEquipo,
    getAllTipoEquipos,
    updateTipoEquipo
 }