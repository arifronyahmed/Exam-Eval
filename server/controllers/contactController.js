const Contact = require('../models/contactModel');

exports.addContact = async (req, res) => {
  try {
    const newContact = await Contact.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        contact: newContact,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
