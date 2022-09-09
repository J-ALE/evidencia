
const putHelper = async(body,Schema,id,res,module) => {
    if(Object.values(body).some(value => !value.trim().length)){
        return res.status(400).json({error:"Every value can not be null or empty"});
    }

    const marca = await Schema.findByIdAndUpdate(id,body);
    if(!marca) {
       return res.status(404).json({not_found:`${module} with id = ${id} couldn't be found for being updated!`})
    }
    const marcaUpdated = await Schema.findById(id);
    res.status(200).json(marcaUpdated);
}
module.exports = putHelper;