
const getHelper = async(Schema,module,res) => {
    const getAll = await Schema.find();
    if(!getAll.length) {
        return res.status(404).json({not_found:`Module type ${module} has no data`});
    }
    res.json(getAll);
}

module.exports = getHelper;