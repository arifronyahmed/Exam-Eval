const Booking = require('../models/bookingsModel');
// const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllBooking = catchAsync(async (req, res, next) => {
  const allBooks = await Booking.find()
    .populate({
      path: 'user',
      select: 'sport startTime endTime name email',
    })
    .exec();

  res.status(200).json({
    status: 'success',
    results: allBooks.length,
    data: {
      allBooks,
    },
  });
});

exports.getBookingsByUser = catchAsync(async (req, res, next) => {
  const userBooking = await Booking.find({ user: req.params.id })
    .populate({
      path: 'user',
      select: 'sport startTime endTime name email',
    })
    .exec();

  res.status(200).json({
    status: 'success',
    data: {
      userBooking,
    },
  });
});






// Create a new booking
exports.makeBooking = catchAsync(async (req, res, next) => {
  const { user, sport, startTime, endTime } = req.body;

  const newBooking = await Booking.create({
    user: user,
    sport: sport,
    startTime: startTime,
    endTime: endTime,
  });

  res.status(200).json({
    status: 'success',
    data: {
      newBooking,
    },
  });
});
