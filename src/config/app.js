import authRoutes from '../controllers/authController';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import passport from './passport';

// initialize express app
const app = express();
app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);

export { app };
