const express = require('express');
const router = express.Router();
const { register, login, fetchUser } = require('../controllers/authController');

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', register);

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', login);
router.get('/user', fetchUser);

module.exports = router;
