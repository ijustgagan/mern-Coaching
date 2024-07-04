const Nexmo = require('nexmo');
require('dotenv').config();

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET,
});

const sendSMS = async (phoneNumber, message) => {
  return new Promise((resolve, reject) => {
    const from = 'Nexmo';
    const to = phoneNumber;
    nexmo.message.sendSms(from, to, message, (err, responseData) => {
      if (err) {
        console.error('Error sending SMS:', err);
        reject(err); // Reject the promise if there's an error
      } else {
        console.log('SMS sent successfully:', responseData);
        resolve(responseData); // Resolve the promise with responseData if successful
      }
    });
  });
};

const sendEmail = async (email, message) => {
  // Implement email sending logic using another email service provider
};

module.exports = {
  sendSMS,
  sendEmail,
};
