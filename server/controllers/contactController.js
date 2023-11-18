const Contact = require('../models/contactModel');
const catchAsync = require('../utils/catchAsync');

exports.addContact = catchAsync(async (req, res) => {
  const newContact = await Contact.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      contact: newContact,
    },
  });
});
