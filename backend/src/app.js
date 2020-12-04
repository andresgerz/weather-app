const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

import { createRols } from './libs/initialSetup';

import authRoute from './routes/auth.routes';
import usersRoutes from './routes/user.routes';

// Settings
app.set('port', process.env.PORT || 4001);


// Middlewares
app.use(cors());
app.use(express.json());
createRols();

app.use(morgan('dev'));

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/today', require('./routes/today'));
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoutes);

app.get('/', (req, res) => {
  res.json({
    name: "Weather app",
    author: "andresgerz",
    description: "React, Node app",
    version: "1.0",
  })
})

module.exports = app;