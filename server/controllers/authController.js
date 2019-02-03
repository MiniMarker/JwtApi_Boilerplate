//Dependencies
const express = require('express');
const router = express.Router();
const passport = require("passport");
const passportService = require('../config/passport'); // THIS NEEDS TO STAY!

const requireAuth = passport.authenticate('jwt', {session: false});
const requireLogin = passport.authenticate('local', {session: false});

//Local files
const authService = require('../services/authService');

router.post('/register', authService.register);
router.post('/login', requireLogin, authService.login);
router.get("/user", requireAuth, authService.getUser);

module.exports = router;