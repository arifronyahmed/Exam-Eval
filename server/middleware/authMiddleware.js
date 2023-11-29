const passport = require('passport');

const protect = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      return res.status(401).json({
        status: 'fail',
        message: 'Unauthorized',
      });
    }

    if (!user) {
      return res.status(401).json({
        status: 'fail',
        message: 'Unauthorized',
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};

module.exports = protect;
