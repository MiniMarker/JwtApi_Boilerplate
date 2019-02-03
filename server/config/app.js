const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');

// Local imports
const passport = require("./passport");
const authController = require('../controllers/authController');

// initialize express app
const app = express();

app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Initialize passport
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/auth', authController);

module.exports = app;