const Newsletter = require('../models/newsLetterModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.addEmail = catchAsync(async (req, res, next) => {
  if (!req.body.email) {
    return next(new AppError('Email address is required', 400));
  }

  const email = req.body.email.trim();

  try {
    const existingEmail = await Newsletter.findOne({ email });
    if (existingEmail) {
      return next(new AppError('Email address already exists', 400));
    }

    const newEmail = await Newsletter.create({ email });

    res.status(201).json({
      status: 'success',
      data: {
        newsLetter: newEmail,
      },
    });
  } catch (error) {
    return next(new AppError('Error adding email', 500));
  }
});




exports.deleteEmail = catchAsync(async (req, res, next) => {
  const newsletter = await Newsletter.findByIdAndDelete(req.params.id);

  if (!newsletter) {
    return next(new AppError('Newsletter not found', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
