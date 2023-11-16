const express = require('express');
const morgan = require('morgan');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const expressSession = require('express-session');

const User = require('./models/userModel');
const newsLetterRoutes = require('./routes/newsLetterRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(
  expressSession({
    secret: 'your-secret-key',
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

app.use((err, req, res, next) => {
  res.status(500).send('Something went wrong!');
});

module.exports = app;
