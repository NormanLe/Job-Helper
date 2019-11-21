const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const jobRouter = require('./routes/jobs');
const userRouter = require('./routes/users');

app.use('/jobs', jobRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}` );
});