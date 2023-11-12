const Newsletter = require('../models/newsLetterModel');

exports.addEmail = async (req, res) => {
  try {
    const newEmail = await Newsletter.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        newsLetter: newEmail,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.deleteEmail = async (req, res) => {
  try {
    await Newsletter.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
