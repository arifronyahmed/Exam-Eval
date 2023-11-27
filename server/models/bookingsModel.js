const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Each booking must have an user'],
  },
  sport: {
    type: String,
    enum: ['badminton', 'squash', 'tennis'],
    required: [true, 'Please provide a valid sport for the booking'],
  },
  startTime: {
    type: Date,
    required: [true, 'Please provide the start time for the booking'],
  },
  endTime: {
    type: Date,
    required: [true, 'Please provide the end time for the booking'],
  },
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;
