const loginService = require('../services/loginServices');

async function login(req, res) {
  const { email, password } = req.body;
  const result = await loginService.login({ email, password });
  if (result.message) {
    return res.status(400).json(result);
  }
  res.status(200).json(result);
}

module.exports = {
  login,
};