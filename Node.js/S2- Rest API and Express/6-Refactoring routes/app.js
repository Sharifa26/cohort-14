const express = require('express');
const { loggerMiddleware } = require('./middleware/logger.middleware');
const coursesRoutes = require('./routes/coursesRoutes');

const app = express();
app.use(express.json());

app.use(loggerMiddleware);
app.use('/api/v1/courses',coursesRoutes);


//health Check up
app.get('/', (req, res) => {
    res.send('this is working..........................')
})

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('the server is  running on port: 3000');
    }

})