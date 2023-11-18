const express = require('express');

const passport = require('passport');

const router = express.Router();


const authController = require('../controllers/authController');

router.post('/signup', authController.signup);

router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
}), (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { user: req.user },
    message: 'Login successful',
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/'); 
});

module.exports = router;
