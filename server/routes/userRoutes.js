const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.route('/').get(userController.getUsers);
router.route('/:id').get(userController.getOneUser);

module.exports = router;
