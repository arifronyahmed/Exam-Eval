const express = require('express');
const planningsController = require('../controllers/planningsController');
const authController = require('../controllers/authController');

const router = express.Router();

router
  .route('/')
  .get(authController.isLoggedIn, planningsController.getPlannings);

module.exports = router;
