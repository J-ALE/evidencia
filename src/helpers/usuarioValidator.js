
const userValidator = (body,res,userFound,regex) => {

    let error = [false];

    if(Object.values(body).some(value => !value.trim().length)){
        return [true,res.status(400).json({error:"Every value can not be null or empty"})];
    }
    if(userFound.length){
        return [true,res.status(400).json({error:"This email already exists. Try other!"})];
    }

    if(!regex.test(body.email)){
       return [true,res.status(400).json({error:"Email type not valid"})];
    }

    return error;
}
module.exports = userValidator;