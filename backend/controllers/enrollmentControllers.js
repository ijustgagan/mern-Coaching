// controllers/enrollController.js
const Enrollment = require('../models/Enrollment');

exports.submitEnrollment = async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newEnrollment = new Enrollment({ name, email, phone });
    await newEnrollment.save();
    res.status(200).json({ message: 'Enrollment successful.', enrollment: newEnrollment });
  } catch (error) {
    console.error('Error submitting enrollment:', error);
    res.status(500).json({ error: 'Failed to enroll. Please try again later.' });
  }
};
