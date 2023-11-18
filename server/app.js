const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const expressSession = require('express-session');

// const AppError = require('./utils/appError');
const appWiseErrorHandler = require('./controllers/errorController');
const User = require('./models/userModel');
const newsLetterRoutes = require('./routes/newsLetterRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const planningsRoutes = require('./routes/planningsRoutes');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(
  expressSession({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  }),
);

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api/v1/auth', authRoutes);
// Routes
app.use('/api/v1/subscribe', newsLetterRoutes);
app.use('/api/v1/contact', contactRoutes);

app.use('/api/v1/plannings',planningsRoutes); 

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `can not find ${req.originalUrl}`,
  });
});

app.use(appWiseErrorHandler);

module.exports = app;

