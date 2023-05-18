const EstadoEquipo = require("../models/EstadoEquipo");
const Inventario = require("../models/Inventario");
const Marca = require("../models/Marca");
const TipoEquipo = require("../models/TipoEquipo");
const Usuario = require("../models/Usuario");

const findEstadoEquipoById = async(id) => {
    if(!id) {
        return;
    }
    try {
        const estadoEquipo = await EstadoEquipo.findById(id);
        
        if(!estadoEquipo) {
            throw new Error(`No existe este estado equipo con el id: ${id}`);
        }
        
    } catch (error) {
        throw new Error(`No existe este estado equipo con el id: ${id}`);
    }
    

}

const findMarcaById = async(id) => {
    if(!id) {
        return;
    }

    try {
        const marca = await Marca.findById(id);
        
        if(!marca) {
            throw new Error(`No existe esta marca con el id: ${id}`);
        }
        
    } catch (error) {
        throw new Error(`No existe esta marca con el id: ${id}`);
    }
    
}

const findTipoEquipoById = async(id) => {
    if(!id) {
        return;
    }
    try {
        const tipoEquipo = await TipoEquipo.findById(id);
        
        if(!tipoEquipo) {
            throw new Error(`No existe este tipo equipo con el id: ${id}`);
        }
        
    } catch (error) {
        throw new Error(`No existe este tipo equipo con el id: ${id}`);
    }
}

const findUserById = async(id) =>{
    if(!id) {
        return;
    }

    try {
        const user = await Usuario.findById(id);
        
        if(!user) {
            throw new Error(`No existe este usuario con el id: ${id}`);
        }
        
    } catch (error) {
        throw new Error(`No existe este usuario con el id: ${id}`);
    }
}

const findItemByModel = async(model) => {

    
    const item = await Inventario.findOne({model});

    if(item) {
        throw new Error(`Este modelo ya existe en la BD = ${model}`)
    }


}

const findItemBySerial = async(serial) =>{
   
    const item = await Inventario.findOne({serial});


    if(item) {
        throw new Error(`Este serial ya existe en la BD = ${serial}`)
    }

}

const findItemById = async(id) => {
    if(!id) {
        return;
    }

    try {
        const item = await Inventario.findById(id);
        
        if(!item) {
            throw new Error(`No existe este item con el id: ${id}`);
        }
        
    } catch (error) {
        throw new Error(`No existe este item con el id: ${id}`);
    }
}


module.exports = {
    findEstadoEquipoById,
    findMarcaById,
    findTipoEquipoById,
    findUserById,
    findItemByModel,
    findItemBySerial,
    findItemById
}