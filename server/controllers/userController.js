const User = require('../models/userModel');

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
};


exports.getOneUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  };





