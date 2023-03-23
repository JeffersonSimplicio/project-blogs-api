const loginService = require('../services/loginServices');

async function login(req, res) {
  const { email, password } = req.body;
  const result = await loginService.login({ email, password });
  if (result.message) {
    return res.status(404).json(result);
  }
  res.status(200).json(result);
}

function reconnect(req, res) {
  const { user: {
    displayName: user,
    email,
    image,
  } } = res.locals;
  const token = req.headers.authorization;
  const test = { user, email, image, token };
  res.status(200).json(test);
}

module.exports = {
  login,
  reconnect,
};