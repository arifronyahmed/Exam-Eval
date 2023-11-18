const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.status(401).json({
    status: 'fail',
    message: 'Authentication failed. Please log in to access this resource.',
  });
};

exports.signup = catchAsync(async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({ email, username });

  try {
    const registeredUser = await User.register(user, password);
    res.status(201).json({
      status: 'success',
      message: 'Signup successful',
      data: {
        registeredUser,
      },
    });
  } catch (registrationError) {
    // Check if it's a duplicate key error (user already exists)
    if (registrationError.name === 'UserExistsError') {
      res.status(400).json({
        status: 'fail',
        message: 'User with this email or username already exists',
      });
    } else {
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
  }
});
