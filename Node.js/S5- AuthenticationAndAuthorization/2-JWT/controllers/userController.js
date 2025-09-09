require('dotenv').config();
const UserModel = require('../models/UserModel'); 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const ROUND = 4;
const Key = process.env.JWT_KEY;

// Register a new user
const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, ROUND );
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

    let isSamePassword = bcrypt.compareSync(password, dbUser.password);

    //const isSamePassword = dbUser.password == hashedPassword;
    if(!isSamePassword){
        throw new Error('Invaild password');
    }
    const payload = {
        id : dbUser.id,
        age: dbUser.age
    }

    const token = jwt.sign(payload,Key,{expiresIn:'2h'});

    return {status : 'ok', token};
}

module.exports = {registerUser,loginUser};