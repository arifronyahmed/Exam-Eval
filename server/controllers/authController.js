const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.signup = catchAsync(async (req, res, next) => {
  User.register(
    new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    }),
    req.body.password,
    async (err, user) => {
      if (err) {
        return next(new AppError('Error creating user', 500));
      }

      const token = signToken(user._id);

      res.status(201).json({
        status: 'success',
        token,
        data: {
          user,
        },
      });
    },
  );
});

exports.login = catchAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('User not found', 404));
  }

  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
});


