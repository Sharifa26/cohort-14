const courses = require('../models/courses.models');
const express = require('express');

const router = express.Router();




//Get All Courses
router.get('/', (req, res) => {
    const { limit, offset } = req.query;

    const limitNum = limit !== undefined ? parseInt(limit) : courses.length;
    const offsetNum = offset !== undefined ? parseInt(offset) : 0;
    const result = courses.slice(offsetNum, offsetNum + limitNum);
    res.send(result);
});



//GET by Id
router.get('/:id', (req, res) => {
    const Id = req.params.id;
    // console.log(req.params);
    res.send(courses[Id]);
})

router.post('/', (req, res) => {
    const temCourses = req.body;
    temCourses.id = courses.length;
    // console.log(req.body);
    courses.push(temCourses);

    res.send(temCourses);

})

module.exports = router;