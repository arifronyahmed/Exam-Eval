const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const appWiseErrorHandler = require('./controllers/errorController');

const newsLetterRoutes = require('./routes/newsLetterRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// const authController = require('./controllers/authController');

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
// Routes
app.use('/api/v1/subscribe', newsLetterRoutes);
app.use('/api/v1/contact', contactRoutes);

//this routes has to be authorised

app.use('/api/v1/booking', bookingRoutes);

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 'fail',
    message: `can not find ${req.originalUrl}`,
  });
});

app.use(appWiseErrorHandler);

module.exports = app;
