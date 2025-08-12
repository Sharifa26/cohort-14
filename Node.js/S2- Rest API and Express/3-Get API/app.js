const express = require('express');

const app = express();

const courses = [
    { id: 1, name: "JavaScript Fundamentals", duration: "4 weeks", level: "Beginner" },
    { id: 2, name: "Python for Data Science", duration: "6 weeks", level: "Intermediate" },
    { id: 3, name: "React.js Development", duration: "5 weeks", level: "Intermediate" },
    { id: 4, name: "Machine Learning Basics", duration: "8 weeks", level: "Advanced" },
    { id: 5, name: "UI/UX Design Principles", duration: "3 weeks", level: "Beginner" }
];


//health Check up
app.get('/', (req, res) => {
    res.send('this is working..........................')
})

//Get All Courses
app.get('/api/v1/courses', (req, res) => {
    const { limit, offset } = req.query;

    const limitNum = limit !== undefined ? parseInt(limit) : courses.length;
    const offsetNum = offset !== undefined ? parseInt(offset) : 0;
    const result = courses.slice(offsetNum, offsetNum + limitNum);
    res.send(result);
});

//GET by Id
app.get('/api/v1/courses/:id', (req, res) => {
    const Id = req.params.id;
    // console.log(req.params);
    res.send(courses[Id]);
})


app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('the server is  running on port: 3000');
    }

})