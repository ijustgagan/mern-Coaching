const express = require('express');
const router = express.Router();
const Enrollment = require('../models/Enrollment');
const { sendSMS } = require('../services/notificationService');

// POST /api/enroll endpoint to handle form submission
router.post('/', async (req, res) => {
  const { name, email, phone, course } = req.body;

  try {
    console.log('Received enrollment request for phone:', phone);

    // Save the enrollment details to MongoDB
    const enrollment = new Enrollment({ name, email, phone, course });
    await enrollment.save();

    // Call sendSMS function to send SMS
    const smsSent = await sendSMS(phone, `Successfully enrolled in ${course}! Our team will connect you.`);

    if (smsSent) {
      res.status(200).json({ message: 'Enrollment successful. SMS confirmation sent.' });
    } else {
      throw new Error('Failed to send SMS confirmation.');
    }
  } catch (error) {
    console.error('Error during enrollment:', error);
    res.status(500).json({ error: 'Failed to enroll. Please try again later.' });
  }
});

module.exports = router;
