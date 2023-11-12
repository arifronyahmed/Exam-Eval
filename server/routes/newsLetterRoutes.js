const express = require('express');
const newsLetterControler = require('../controllers/newsLetterController');

const router = express.Router();

router.route('/').post(newsLetterControler.addEmail);

// this route is to unsubscribe from the newsletter
router.route('/:id').delete(newsLetterControler.deleteEmail);

module.exports = router;
