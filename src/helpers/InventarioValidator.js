const inventoryValidator = (body,res) => {
    const Errorvalidator = Object.values(body).some(value => {
         
        if(/^[0-9]+$/.test(value)) { //valida si es un número
        
           return value <= 0 ? true : false;
        }
        if(value._id) {
           return !value._id.trim().length ? true : false;
        }
           return !value.length ? true : false;

     })
        return Errorvalidator;
}
module.exports = inventoryValidator