const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
});


module.exports = mongoose.Schema('User', User);