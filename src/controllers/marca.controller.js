const getHelper = require("../helpers/getHelper");
const postHelper = require("../helpers/postHelper");
const putHelper = require("../helpers/putHelper");
const Marca = require("../models/Marca");


 const createMarca = async(req,res) => {
    await postHelper(req.body,Marca,res);
    // try {
    //     const body = req.body;
    //     if(Object.values(body).some(value => !value.trim().length)){
    //         return res.status(400).json({error:"Every value can not be null or empty"});
    //     }
    //     const marca = await Marca(body);
    //     await marca.save();
    //     res.json(marca);
        
    // } catch (error) {
    //     res.status(400).json({error:error.message})
    // }
 }

 const getAllMarcas = async(req,res) => {
    await getHelper(Marca,"Marca",res);
    // const getAll = await Marca.find();
    // if(!getAll.length) {
    //     return res.status(404).json({not_found:"Module type Marca has no data"});
    // }
    // res.json(getAll);
 }

 const updateMarca = async(req,res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        await putHelper(body,Marca,id,res,"Marca")
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }

 module.exports = {
    createMarca,
    getAllMarcas,
    updateMarca
 }