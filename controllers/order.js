const getAll = function(req, res) {
  res.status(200).json({login: true});
}

const create = function(req, res) {
  res.status(200).json({login: true});
}

module.exports = {getAll, create}