const getAllCourses = (req, res) => {
    const { limit, offset } = req.query;

    const limitNum = limit !== undefined ? parseInt(limit) : courses.length;
    const offsetNum = offset !== undefined ? parseInt(offset) : 0;
    const result = courses.slice(offsetNum, offsetNum + limitNum);
    res.send(result);
}

const getById = (req, res) => {
    const Id = req.params.id;
    // console.log(req.params);
    res.send(courses[Id]);
}

const createCourses = (req, res) => {
    const temCourses = req.body;
    temCourses.id = courses.length;
    // console.log(req.body);
    courses.push(temCourses);

    res.send(temCourses);

}

module.exports = { getAllCourses , getById , createCourses}