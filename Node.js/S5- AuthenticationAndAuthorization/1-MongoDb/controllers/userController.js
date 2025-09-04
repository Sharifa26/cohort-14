const UserModel = require('../models/UserModel'); 

// Register a new user
const registerUser = async (user) => {
    const result = await UserModel.create(user);
    return result
};

//Login User
const loginUser = async(email,password) =>{
    const body = {
        email : email
    }
    const dbUser = await UserModel.findOne(body);
    if(!dbUser){
        throw new Error('User not found'); 
    }

    const isSamePassword = dbUser.password == password;
    if(!isSamePassword){
        throw new Error('Invaild password');
    }

    return {status : 'ok', user:{id: dbUser.id}};
}

module.exports = {registerUser,loginUser};