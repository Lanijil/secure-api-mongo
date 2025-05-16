const express = require('express');
const { body } = require('express-validator');
const {
  register,
  login,
  getMe,
  updateUsername,
  deleteUser
} = require('../controllers/authController');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/register',
    body('username').isLength({ min: 3 }),
    body('password').isLength({ min: 6 }),
    register
);

router.post('/login',
    body('username').notEmpty(),
    body('password').notEmpty(),
    login
);

router.get('/me', verifyToken, getMe);
router.put('/me', verifyToken, updateUsername);
router.delete('/me', verifyToken, deleteUser);

module.exports = router;