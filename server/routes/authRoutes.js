const express = require('express');

// const passport = require('passport');

const router = express.Router();

const authController = require('../controllers/authController');

router.post('/signup', authController.signup);

// Login Route
// router.post('/login', passport.authenticate('local'), (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     data: { user: req.user },
//     message: 'Login successful',
//   });
// });

module.exports = router;
