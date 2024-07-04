const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST /api/contact endpoint to handle form submission
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save the contact details to MongoDB
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.status(200).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ error: 'Failed to submit contact form. Please try again later.' });
  }
});

module.exports = router;
