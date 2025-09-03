const User = require('../models/UserModel'); 

// Create a new user
exports.createUser = async (req, res) => {
    try {
        const userBody = req.body;
        const result = await User.create(userBody);
        res.status(201).json(result);
    } catch (err) { 
        res.status(400).json({ error: err.message });
    }
};