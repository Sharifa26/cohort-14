const mongoose = require("mongoose");

// Step 1: Define the schema
const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ["Beginner", "Intermediate", "Advanced"], // optional constraint
        required: true
    }
});

// Step 2: Create the model
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
