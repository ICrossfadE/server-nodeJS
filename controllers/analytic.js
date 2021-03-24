const analytic = function(req, res) {
  res.status(200).json({login: true});
}

const overviev = function(req, res) {
  res.status(200).json({login: true});
} 

module.exports = {analytic, overviev}