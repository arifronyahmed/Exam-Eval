const express = require('express');
const userController = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);

router.route('/').get(userController.getUser);
router.route('/:id').get(userController.getUserById);
router.route('/:id').patch(userController.updateUser);
router.route('/:id').delete(userController.deleteUser);

module.exports = router;
