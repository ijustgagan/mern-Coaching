const express = require('express');
const router = express.Router();
const {
    registerUser,
    loginUser,
    sendOtp,
    verifyOtp,
    resetPassword
} = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', sendOtp);  // Ensure this is '/forgot-password'
router.post('/verify-otp', verifyOtp);
router.post('/reset-password', resetPassword);

module.exports = router;
