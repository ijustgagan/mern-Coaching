const express = require('express');
const router = express.Router();
const { sendSMS, sendEmail } = require('../services/notificationService'); // Adjust based on your service implementation

// POST /api/enroll endpoint to handle form submission
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body; // Extract data from request body

  try {
    // Example: send SMS or email confirmation (adjust as per your needs)
    const smsSent = await sendSMS(phone, `Successfully enrolled! Our team will connect you.`);
    const emailSent = await sendEmail(email, `Successfully enrolled! Our team will connect you.`);

    if (smsSent && emailSent) {
      res.status(200).json({ message: 'Enrollment successful. Confirmation sent.' });
    } else {
      throw new Error('Failed to send confirmation.');
    }
  } catch (error) {
    console.error('Error sending confirmation:', error);
    res.status(500).json({ error: 'Failed to enroll. Please try again later.' });
  }
});

module.exports = router;
