require('dotenv').config();
const express = require('express');
const { loggerMiddleware } = require('./middleware/logger.middleware');
const coursesRoutes = require('./routes/coursesRoutes');
const usersRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const uri = process.env.MONGO_URL;
const app = express();
app.use(express.json());

app.use(loggerMiddleware);
app.use('/api/v1/courses', coursesRoutes);
app.use('/api/v1/users', usersRoutes);


//health Check up
app.get('/', (req, res) => {
    res.send('this is working..........................')
});



mongoose.connect(uri).then(() => {
    console.log('Mongo Db Connected Sucessfully..😎');
    app.listen(3000, (err) => {
        if (err) {
            console.log('Error in connecting the DB', err);
        }
        else {
            console.log('the server is  running on port: 3000');
        }
    })
}).catch(err => {
    console.log(err);
});
