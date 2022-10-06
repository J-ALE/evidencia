
const userValidator = (body,res,users,regex) => {

    let error = [false];
    const filteredUsers = users.filter(user => user.email !== body.email);
    if(Object.values(body).some(value => !value.trim().length)){
        return [true,res.status(400).json({error:"Every value can not be null or empty"})];
    }
    if(filteredUsers.find(user => user.email === body.email)){
       
       return [true,res.status(400).json({error:"This email already exists. Try other!"})];


    }

    if(!regex.test(body.email)){
       return [true,res.status(400).json({error:"Email type not valid"})];
    }

    return error;
}
module.exports = userValidator;