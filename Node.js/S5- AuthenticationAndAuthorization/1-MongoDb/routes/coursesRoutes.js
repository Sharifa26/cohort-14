const courses = require('../models/courses.models');
const express = require('express');
const { getAllCourses, getById, createCourses } = require('../controllers/courses.controller')
const router = express.Router();


//Get All Courses
router.get('/', getAllCourses);

//GET by Id
router.get('/:id', getById)

//create a course
router.post('/', createCourses)

module.exports = router;