const express = require('express');
const newsLetterController = require('../controllers/newsLetterController');

const router = express.Router();

router.route('/').post(newsLetterController.addEmail);

// this route is to unsubscribe from the newsletter
router.route('/:id').delete(newsLetterController.deleteEmail);

module.exports = router;
