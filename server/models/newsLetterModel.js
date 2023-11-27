const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [
      true,
      'To receive newsletters, you must provide a valid email address',
    ],
    validate: {
      validator: function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: 'Invalid email address',
    },
  },
});

const Newsletter = mongoose.model('Newsletter', newsletterSchema);

module.exports = Newsletter;
