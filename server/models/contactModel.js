const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  message:{
    type: String,
    required: [true, 'Message is required'],
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
