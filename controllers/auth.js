const User = require('../models/User');


const login = function(req, res) {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password,
    }
  });
};

const register = function(req, res) {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save().then(() => {console.log('user push');})
}

module.exports = {login, register}