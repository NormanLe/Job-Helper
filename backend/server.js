const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const atlas_uri = process.env.ATLAS_URI;

mongoose.connect(atlas_uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;

const jobRouter = require('./routes/jobs');
const userRouter = require('./routes/users');

app.use('/jobs', jobRouter);
app.use('/users', userRouter);
