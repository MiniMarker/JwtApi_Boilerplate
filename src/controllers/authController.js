import { getUser, login, register } from '../services/authService';
import express from 'express';
import passport from 'passport';

const router = express.Router();
// eslint-disable-next-line
const passportService = require('../config/passport'); // THIS NEEDS TO STAY!

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

router.post('/register', register);
router.post('/login', requireLogin, login);
router.get('/user', requireAuth, getUser);

export default router;
