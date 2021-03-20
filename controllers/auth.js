const login = function(req, res) {
  res.status(200).json({login: true});
};

const register = function(req, res) {
  res.status(200).json({register: true});
}

module.exports = {login, register}