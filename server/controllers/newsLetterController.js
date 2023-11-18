const Newsletter = require('../models/newsLetterModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.addEmail = catchAsync(async (req, res) => {
  const newEmail = await Newsletter.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newsLetter: newEmail,
    },
  });
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
