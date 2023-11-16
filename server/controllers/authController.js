const User = require('../models/userModel');

exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const user = new User({ email, username });

    // handle registration errors
    try {
      const registeredUser = await User.register(user, password);
      res.status(201).json({
        status: 'success',
        message: 'Signup successful',
        data: {
          registeredUser,
        },
      });
    } catch (registrationError) {
    //   console.error(registrationError);

      // Check if it's a duplicate key error (user already exists)
      if (registrationError.name === 'UserExistsError') {
        res.status(400).json({
          status: 'fail',
          message: 'User with this email or username already exists',
        });
      } else {
        res.status(500).json({
          status: 'error',
          message: 'Internal Server Error',
        });
      }
    }
  } catch (error) {
    // console.error(error);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
};
