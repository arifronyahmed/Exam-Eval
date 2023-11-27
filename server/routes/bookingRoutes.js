const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router
  .route('/')
  .get(bookingController.getAllBooking)
  .post(bookingController.makeBooking);

router.route('/:id').get(bookingController.getBookingsByUser);

module.exports = router;
