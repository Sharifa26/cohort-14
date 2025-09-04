const express = require('express');
const {registerUser,loginUser} = require('../controllers/userController');
const router = express.Router();

//create a user
router.post('/register',async (req,res)=>{ 
    const user = req.body;
    const dbUser = await registerUser(user)
    res.send(dbUser);
});
router.post('/login',async(req,res)=>{
    const { email ,password } = req.body;
    const dbuser = await loginUser(email,password)
    res.send(dbuser);
});

module.exports = router;