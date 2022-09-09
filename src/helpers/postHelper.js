
 const postHelper = async(body,Schema,res) => {
    try {
        if(Object.values(body).some(value => !value.trim().length)){
            return res.status(400).json({error:"Every value can not be null,empty, less or equal to 0"});
        }
        const module = Schema(body);
        await module.save();
        res.json(module);
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
 }
 module.exports = postHelper;