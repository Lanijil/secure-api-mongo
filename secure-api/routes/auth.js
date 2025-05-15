const express = require('express');
const { body } = require('express-validator');
const { register, login } = require('../controllers/authController');

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

module.exports = router;