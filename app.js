const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const keys = require('./config/keys')

//Routes
const analyticRoutes = require('./routes/analytic');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');

const app = express();

mongoose.connect(keys.mongoURL).then(() => {console.log('mongo conected!');}).catch(console.log('err'))

app.use(morgan('dev'));

app.use(cors())

app.use(bodyParser.urlencoded({extends: true}));
app.use(bodyParser.json());

app.use('/api/analytic', analyticRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/position', positionRoutes);


module.exports = app