const jwt = require('jsonwebtoken');
const Key = process.env.JWT_KEY;

const validate = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        res.status(400).send({ "Data": "Token is missing" });
    }

    const decode = jwt.verify(token, Key);

    if (!decode) {
        res.status(401).send("Unauthorized");
    }
    next();
    console.log(decode);
}

module.exports = validate;